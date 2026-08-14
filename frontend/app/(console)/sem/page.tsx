"use client";

import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api, type AdsStatus } from "@/lib/api";

const EMPTY_NOTE =
  "未配置 / 未测：没有 GOOGLE_ADS_*、接口不可用，或没有广告测试账号。不编造广告系列，也不提供无处可去的 OAuth 按钮。";

function emptyAdsStatus(note: string): AdsStatus {
  return {
    configured: false,
    connected: false,
    has_test_account: false,
    status: "未配置",
    customer_id: null,
    mcc_id: null,
    missing_env: [],
    present_env: [],
    note,
    campaigns: [],
  };
}

function isLiveAds(data: AdsStatus): boolean {
  return data.configured && data.connected && data.has_test_account;
}

function statusTone(data: AdsStatus): "green" | "amber" {
  return isLiveAds(data) ? "green" : "amber";
}

function statusLabel(data: AdsStatus): string {
  if (isLiveAds(data)) return data.status || "已配置";
  if (data.status === "未测") return "未测";
  return "未配置 / 未测";
}

export default function SemPage() {
  const [data, setData] = useState<AdsStatus | null>(null);
  const [apiMissing, setApiMissing] = useState(false);

  useEffect(() => {
    api<AdsStatus>("/api/ads/status")
      .then((body) => {
        setApiMissing(false);
        setData(body);
      })
      .catch(() => {
        setApiMissing(true);
        setData(emptyAdsStatus(EMPTY_NOTE));
      });
  }, []);

  if (!data) return <p className="text-sm text-slate-500">加载中…</p>;

  const showEmpty = !isLiveAds(data) || data.campaigns.length === 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">SEM / Google Ads</h1>
        <p className="mt-1 text-sm text-slate-500">
          只读连接状态。没有测试账号就写未测；未配环境变量就写未配置。不编造广告系列。改预算 /
          出价会动线上广告，须人确认后再做。
        </p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle>Google Ads 连接</CardTitle>
            <p className="mt-1 text-xs text-slate-500">
              {apiMissing ? "GET /api/ads/status 不可用，按未配置 / 未测显示。" : data.note}
            </p>
          </div>
          <Badge tone={statusTone(data)}>{statusLabel(data)}</Badge>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-slate-600">
          <div className="grid gap-3 md:grid-cols-3">
            <div>
              <div className="text-xs text-slate-500">环境变量</div>
              <div className="mt-1 font-medium">{data.configured ? "已齐" : "未配置"}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">账号连接</div>
              <div className="mt-1 font-medium">{data.connected ? "已连接" : "未测"}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">测试账号</div>
              <div className="mt-1 font-medium">{data.has_test_account ? "已具备" : "未测"}</div>
            </div>
          </div>
          {data.present_env.length > 0 ? (
            <p className="text-xs text-slate-500">已出现：{data.present_env.join("、")}</p>
          ) : null}
          {data.missing_env.length > 0 ? (
            <p className="text-xs text-slate-500">缺失：{data.missing_env.join("、")}</p>
          ) : null}
          {data.customer_id || data.mcc_id ? (
            <p className="text-xs text-slate-500">
              {data.customer_id ? `客户 ID ${data.customer_id}` : ""}
              {data.customer_id && data.mcc_id ? " · " : ""}
              {data.mcc_id ? `MCC ${data.mcc_id}` : ""}
            </p>
          ) : null}
        </CardContent>
      </Card>

      {showEmpty ? (
        <Card>
          <CardHeader>
            <CardTitle>广告系列</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">未配置 / 未测。没有可展示的真实广告系列。</p>
            <p className="mt-2 text-sm text-slate-500">
              本页不生成示例活动，不提供 OAuth 入口，也不开放预算或出价编辑。
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {data.campaigns.map((c) => (
            <Card key={c.id}>
              <CardHeader className="flex flex-row items-start justify-between">
                <CardTitle>{c.name}</CardTitle>
                <Badge>{c.status}</Badge>
              </CardHeader>
              <CardContent className="text-xs text-slate-500">只读。ID {c.id}</CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
