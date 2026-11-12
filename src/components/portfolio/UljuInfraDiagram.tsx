import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  kiosk: (
    <>
      <rect x="6" y="2" width="12" height="14" rx="2" />
      <path d="M12 16v4M8 21h8M10 9a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  split: (
    <>
      <circle cx="5" cy="12" r="2.5" />
      <circle cx="19" cy="6" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M7.5 12h4l5-5.5M11.5 12l5 5.5" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" />
    </>
  ),
  voice: (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  exit: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </>
  ),
};

type Kind = "client" | "edge" | "compute" | "data" | "ops";
type Node = { id: string; x: number; y: number; w: number; label: string; sub: string; icon: string; kind: Kind };

// 2026-11-03 NCP Gov API 조회 결과(서버·서브넷·ALB·대상 그룹·ACG·라우트) 기준. IP·포트는 공개하지 않는다.
const nodes: Node[] = [
  { id: "user", x: 105, y: 170, w: 164, label: "방문객·예약 사용자", sub: "예약 웹 · 관리자 화면", icon: "user", kind: "client" },
  { id: "kiosk", x: 105, y: 320, w: 164, label: "코쿤 부스 키오스크", sub: "음성 AI 상담", icon: "kiosk", kind: "client" },
  { id: "admin", x: 105, y: 460, w: 164, label: "운영자", sub: "지정 IP · VPN 인증", icon: "user", kind: "client" },
  { id: "vendor", x: 570, y: 40, w: 170, label: "WAF 관제 업체", sub: "지정 IP에서만", icon: "shield", kind: "client" },
  { id: "alb", x: 350, y: 170, w: 170, label: "ALB", sub: "서비스·관리자 리스너", icon: "split", kind: "edge" },
  { id: "waf", x: 570, y: 170, w: 170, label: "WAF", sub: "웹 공격 탐지·차단", icon: "shield", kind: "edge" },
  { id: "voice", x: 350, y: 320, w: 170, label: "실시간 음성 AI 서버", sub: "AI 상담 대화", icon: "voice", kind: "compute" },
  { id: "bastion", x: 350, y: 460, w: 170, label: "Bastion", sub: "관리 접속 경유지", icon: "lock", kind: "ops" },
  { id: "vpn", x: 350, y: 595, w: 170, label: "SSL VPN", sub: "운영자 전용 대역", icon: "lock", kind: "ops" },
  { id: "web", x: 870, y: 170, w: 180, label: "예약 웹·API 서버", sub: "Next.js · NestJS", icon: "server", kind: "compute" },
  { id: "db", x: 870, y: 320, w: 180, label: "Cloud DB for MySQL", sub: "예약·운영 데이터", icon: "database", kind: "data" },
  { id: "nat", x: 870, y: 595, w: 180, label: "NAT Gateway", sub: "사설 서버 송신 전용", icon: "exit", kind: "ops" },
];

const subnets = [
  { x: 252, y: 115, w: 196, h: 100, label: "LB 서브넷 · 공개" },
  { x: 472, y: 115, w: 196, h: 100, label: "WAF 서브넷 · 공개" },
  { x: 252, y: 245, w: 196, h: 260, label: "공개 서브넷" },
  { x: 700, y: 115, w: 345, h: 390, label: "사설 서브넷 · 공인 IP 없음" },
  { x: 700, y: 545, w: 345, h: 95, label: "NAT 서브넷 · 공개" },
];

type Edge = { d: string; label?: string; lx?: number; ly?: number; anchor?: "start" | "middle"; head?: boolean; both?: boolean };
type Flow = { id: number; name: string; detail: string; badge: [number, number]; edges: Edge[] };

const flows: Flow[] = [
  {
    id: 1,
    name: "예약 요청",
    detail: "사용자 → ALB → WAF 검사 → 사설 서브넷의 웹·API 서버 → MySQL. 웹 서버는 공인 IP 없이 WAF와 LB 대역의 요청만 받습니다.",
    badge: [224, 170],
    edges: [
      { d: "M187 170H261" },
      { d: "M435 170H481" },
      { d: "M655 170H776", label: "검사 통과", lx: 715, ly: 161 },
      { d: "M870 194V294", label: "SQL", lx: 879, ly: 250, anchor: "start" },
    ],
  },
  {
    id: 2,
    name: "음성 AI 상담",
    detail: "부스 키오스크 → 실시간 음성 AI 서버 → MySQL. DB는 이 서버와 웹 서버 등 허용한 출발지에서만 접속을 받습니다.",
    badge: [224, 320],
    edges: [
      { d: "M187 320H261" },
      { d: "M435 320H776", label: "허용한 출발지만", lx: 605, ly: 311 },
    ],
  },
  {
    id: 3,
    name: "운영 접속",
    detail: "운영자는 지정 IP에서 Bastion으로, 또는 SSL VPN으로만 들어옵니다. 사설 서버의 SSH와 DB 관리 접속은 이 두 경로에서만 열려 있습니다.",
    badge: [224, 460],
    edges: [
      { d: "M187 460H261" },
      { d: "M105 484V595H261", label: "VPN", lx: 113, ly: 545, anchor: "start" },
      { d: "M435 460H696", label: "SSH · DB 관리", lx: 565, ly: 451 },
      { d: "M435 595H600V462", head: false },
    ],
  },
  {
    id: 4,
    name: "외부 송신",
    detail: "사설 서버는 공인 IP가 없어 밖으로 나가는 요청을 NAT Gateway로만 보냅니다. 들어오는 연결은 이 경로로 열리지 않습니다.",
    badge: [1015, 300],
    edges: [
      { d: "M960 170H1015V595H964", label: "송신", lx: 1024, ly: 388, anchor: "start" },
      { d: "M870 619V682", label: "인터넷", lx: 880, ly: 676, anchor: "start" },
    ],
  },
  {
    id: 5,
    name: "WAF 관제",
    detail: "관제 업체는 지정 IP에서만 WAF를 관리하고, WAF는 탐지 로그를 관제 서버로 보냅니다.",
    badge: [620, 100],
    edges: [{ d: "M620 64V144", label: "관리 · 로그", lx: 634, ly: 104, anchor: "start", both: true }],
  },
];

function NodeBox({ node }: { node: Node }) {
  return (
    <g className="uid-node" data-kind={node.kind} transform={`translate(${node.x - node.w / 2} ${node.y - 24})`}>
      <rect width={node.w} height="48" rx="10" />
      <svg x="10" y="13" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {icons[node.icon]}
      </svg>
      <text className="uid-label" x="40" y="21">{node.label}</text>
      <text className="uid-sub" x="40" y="37">{node.sub}</text>
    </g>
  );
}

export function UljuInfraDiagram() {
  return (
    <figure className="uid" aria-labelledby="uid-title">
      <figcaption id="uid-title">인프라 구성도 · NCP 공공기관용(Gov)</figcaption>
      <p className="uid-hint">옆으로 밀어서 보세요</p>
      <div className="uid-scroll">
        <svg
          className="uid-svg"
          viewBox="0 0 1080 700"
          role="img"
          aria-label="울주 AI센터 NCP 인프라 구성도. 예약 요청은 ALB와 WAF를 거쳐 사설 서브넷의 웹·API 서버와 MySQL로 간다. 부스 키오스크는 공개 서브넷의 실시간 음성 AI 서버에 연결되고 이 서버는 MySQL에 접속한다. 운영자는 Bastion 또는 SSL VPN으로만 사설 서버에 접속한다. 사설 서버의 외부 송신은 NAT Gateway로만 나간다. WAF 관제 업체는 지정 IP에서 WAF를 관리하고 로그를 받는다."
        >
          <defs>
            {flows.map((flow) => (
              <marker key={flow.id} id={`uid-head-${flow.id}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0 0L10 5L0 10Z" className="uid-head" data-flow={flow.id} />
              </marker>
            ))}
          </defs>

          <text className="uid-zone-label" x="105" y="110" textAnchor="middle">인터넷</text>
          <rect className="uid-vpc" x="222" y="82" width="840" height="578" rx="18" />
          <text className="uid-vpc-label" x="238" y="103">NCP 공공기관용(Gov) · KR-1 · VPC</text>
          {subnets.map((subnet) => (
            <g key={subnet.label}>
              <rect className="uid-subnet" x={subnet.x} y={subnet.y} width={subnet.w} height={subnet.h} rx="12" />
              <text className="uid-subnet-label" x={subnet.x + 12} y={subnet.y + 18}>{subnet.label}</text>
            </g>
          ))}

          {flows.map((flow) => (
            <g key={flow.id} className="uid-flow" data-flow={flow.id}>
              {flow.edges.map((edge) => (
                <g key={edge.d}>
                  <path
                    d={edge.d}
                    markerEnd={edge.head === false ? undefined : `url(#uid-head-${flow.id})`}
                    markerStart={edge.both ? `url(#uid-head-${flow.id})` : undefined}
                  />
                  {edge.label ? (
                    <text x={edge.lx} y={edge.ly} textAnchor={edge.anchor ?? "middle"}>{edge.label}</text>
                  ) : null}
                </g>
              ))}
            </g>
          ))}

          {nodes.map((node) => <NodeBox key={node.id} node={node} />)}

          {flows.map((flow) => (
            <g key={flow.id} className="uid-badge" data-flow={flow.id}>
              <circle cx={flow.badge[0]} cy={flow.badge[1]} r="10" />
              <text x={flow.badge[0]} y={flow.badge[1] + 4}>{flow.id}</text>
            </g>
          ))}
        </svg>
      </div>

      <ol className="uid-flows">
        {flows.map((flow) => (
          <li key={flow.id} data-flow={flow.id}>
            <b>{flow.id}</b>
            <div>
              <strong>{flow.name}</strong>
              <p>{flow.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
