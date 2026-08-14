from fastapi.testclient import TestClient


def test_ads_status_unconfigured_without_env(client: TestClient, monkeypatch) -> None:
    for key in (
        "GOOGLE_ADS_CLIENT_ID",
        "GOOGLE_ADS_CLIENT_SECRET",
        "GOOGLE_ADS_DEVELOPER_TOKEN",
        "GOOGLE_ADS_MCC_ID",
        "GOOGLE_ADS_REDIRECT_URI",
    ):
        monkeypatch.delenv(key, raising=False)

    res = client.get("/api/ads/status")
    assert res.status_code == 200
    body = res.json()
    assert body["configured"] is False
    assert body["connected"] is False
    assert body["has_test_account"] is False
    assert body["status"] == "未配置"
    assert body["customer_id"] is None
    assert body["mcc_id"] is None
    assert body["campaigns"] == []
    assert "GOOGLE_ADS_CLIENT_ID" in body["missing_env"]
    assert body["present_env"] == []


def test_ads_status_env_present_is_still_untested(client: TestClient, monkeypatch) -> None:
    for key in (
        "GOOGLE_ADS_CLIENT_ID",
        "GOOGLE_ADS_CLIENT_SECRET",
        "GOOGLE_ADS_DEVELOPER_TOKEN",
        "GOOGLE_ADS_MCC_ID",
        "GOOGLE_ADS_REDIRECT_URI",
    ):
        monkeypatch.setenv(key, "placeholder")

    res = client.get("/api/ads/status")
    assert res.status_code == 200
    body = res.json()
    assert body["configured"] is True
    assert body["connected"] is False
    assert body["has_test_account"] is False
    assert body["status"] == "未测"
    assert body["campaigns"] == []
    assert body["missing_env"] == []
