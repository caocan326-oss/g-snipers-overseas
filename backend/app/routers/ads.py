"""SEM / Google Ads status. Read-only; no OAuth, no live Ads calls, no invented campaigns."""

from __future__ import annotations

import os

from fastapi import APIRouter
from pydantic import BaseModel, Field

UNCONFIGURED = "未配置"
UNTESTED = "未测"

ADS_ENV_KEYS = (
    "GOOGLE_ADS_CLIENT_ID",
    "GOOGLE_ADS_CLIENT_SECRET",
    "GOOGLE_ADS_DEVELOPER_TOKEN",
    "GOOGLE_ADS_MCC_ID",
    "GOOGLE_ADS_REDIRECT_URI",
)

NOTE_UNCONFIGURED = (
    "未配置 GOOGLE_ADS_*，也没有广告测试账号。本接口只回报连接状态，不编造广告系列，"
    "不改预算或出价。"
)
NOTE_UNTESTED = (
    "环境变量已齐，但仍无测试账号、未做 OAuth、未调用 Google Ads。"
    "连接保持未测。不编造广告系列；改预算 / 出价须人确认后再做。"
)


class AdsCampaignOut(BaseModel):
    id: str
    name: str
    status: str


class AdsStatusOut(BaseModel):
    configured: bool
    connected: bool
    has_test_account: bool
    status: str
    customer_id: str | None = None
    mcc_id: str | None = None
    missing_env: list[str] = Field(default_factory=list)
    present_env: list[str] = Field(default_factory=list)
    note: str
    campaigns: list[AdsCampaignOut] = Field(default_factory=list)


router = APIRouter(prefix="/api/ads", tags=["ads"])


def _env_present(key: str) -> bool:
    return bool((os.environ.get(key) or "").strip())


def ads_status_payload() -> AdsStatusOut:
    present = [key for key in ADS_ENV_KEYS if _env_present(key)]
    missing = [key for key in ADS_ENV_KEYS if key not in present]
    configured = len(missing) == 0
    # No refresh token, no test account, no Ads API call — never claim a live link.
    return AdsStatusOut(
        configured=configured,
        connected=False,
        has_test_account=False,
        status=UNTESTED if configured else UNCONFIGURED,
        customer_id=None,
        mcc_id=None,
        missing_env=missing,
        present_env=present,
        note=NOTE_UNTESTED if configured else NOTE_UNCONFIGURED,
        campaigns=[],
    )


@router.get("/status", response_model=AdsStatusOut)
def ads_status() -> AdsStatusOut:
    return ads_status_payload()
