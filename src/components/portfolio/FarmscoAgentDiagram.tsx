import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  graph: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="7" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.5 6.2 15.5 6.8M7.2 8.3l3.6 7.4M16.8 9.3l-3.5 6.5" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M8 17v-5M13 17V8M18 17v-9" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6M8 13h8M8 17h5" />
    </>
  ),
  quote: <path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" />,
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  stream: (
    <>
      <path d="M5 12a7 7 0 0 1 14 0" />
      <path d="M8.5 12a3.5 3.5 0 0 1 7 0" />
      <path d="M12 12v8" />
    </>
  ),
  log: <path d="M4 6h16M4 12h10M4 18h13" />,
  hub: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="4" cy="5" r="2" />
      <circle cx="20" cy="5" r="2" />
      <circle cx="4" cy="19" r="2" />
      <circle cx="20" cy="19" r="2" />
      <path d="m5.6 6.4 4.2 3.8M18.4 6.4l-4.2 3.8M5.6 17.6l4.2-3.8M18.4 17.6l-4.2-3.8" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  ban: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m5.6 5.6 12.8 12.8" />
    </>
  ),
};

type IconName = keyof typeof icons;

function Icon({ name }: { name: IconName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
}

function Chip({ icon, children }: { icon?: IconName; children: ReactNode }) {
  return (
    <span className="fad-chip">
      {icon ? <span className="fad-icon"><Icon name={icon} /></span> : null}
      {children}
    </span>
  );
}

function Arrow({ area, label, back, vertical }: { area: string; label: string; back?: string; vertical?: boolean }) {
  return (
    <div className={vertical ? "fad-arrow fad-arrow-down" : "fad-arrow"} style={{ gridArea: area }} aria-hidden="true">
      <span>{label}</span>
      <i />
      {back ? (
        <>
          <i className="fad-arrow-back" />
          <span>{back}</span>
        </>
      ) : null}
    </div>
  );
}

type NodeKind = "control" | "llm" | "agent" | "stop";
type GraphNode = { id: string; x: number; y: number; w: number };
type GraphEdge = { d: string; label?: string; lx?: number; ly?: number; anchor?: "start" | "middle" | "end"; rotate?: boolean; tone?: "loop" | "retry" };
type GraphLayout = {
  id: string;
  className: string;
  width: number;
  height: number;
  start: [number, number];
  end: [number, number];
  region: { x: number; y: number; w: number; h: number; label: string; lx: number; ly: number };
  group?: { x: number; y: number; w: number; h: number };
  nodes: GraphNode[];
  edges: GraphEdge[];
};

const graphText: Record<string, { label: string; sub: string; kind: NodeKind }> = {
  guard: { label: "범위 확인", sub: "권한·기간", kind: "control" },
  plan: { label: "계획", sub: "Supervisor", kind: "llm" },
  route: { label: "에이전트 할당", sub: "조건부 엣지", kind: "control" },
  data: { label: "데이터 분석", sub: "Text-to-SQL", kind: "agent" },
  rag: { label: "문서 검색", sub: "RAG · Reranker", kind: "agent" },
  kg: { label: "지식그래프", sub: "Graphify", kind: "agent" },
  observe: { label: "결과 관찰", sub: "공유 상태 누적", kind: "control" },
  judge: { label: "충분성 판단", sub: "더 필요한가", kind: "llm" },
  hold: { label: "답변 보류", sub: "대안 안내", kind: "stop" },
  evidence: { label: "근거 조립", sub: "근거 ID", kind: "control" },
  answer: { label: "답변 생성", sub: "문장·인용", kind: "llm" },
  verify: { label: "검증", sub: "숫자·인용 대조", kind: "control" },
  report: { label: "리포트 에이전트", sub: "차트·보고서·파일", kind: "agent" },
};

const graphLayouts: GraphLayout[] = [
  {
    id: "wide",
    className: "fad-graph fad-graph-wide",
    width: 900,
    height: 360,
    start: [20, 45],
    end: [873, 320],
    region: { x: 200, y: 8, w: 600, h: 246, label: "Supervisor 루프 · 근거가 충분할 때까지 반복", lx: 790, ly: 26 },
    nodes: [
      { id: "guard", x: 100, y: 45, w: 110 },
      { id: "plan", x: 270, y: 45, w: 120 },
      { id: "route", x: 470, y: 45, w: 120 },
      { id: "data", x: 340, y: 135, w: 150 },
      { id: "rag", x: 520, y: 135, w: 150 },
      { id: "kg", x: 700, y: 135, w: 150 },
      { id: "observe", x: 520, y: 225, w: 120 },
      { id: "judge", x: 300, y: 225, w: 120 },
      { id: "hold", x: 100, y: 320, w: 110 },
      { id: "evidence", x: 270, y: 320, w: 120 },
      { id: "answer", x: 430, y: 320, w: 120 },
      { id: "verify", x: 590, y: 320, w: 120 },
      { id: "report", x: 770, y: 320, w: 150 },
    ],
    edges: [
      { d: "M27 45H45" },
      { d: "M155 45H210" },
      { d: "M330 45H410", label: "작업 계획", lx: 370, ly: 37 },
      { d: "M470 65L340 115" },
      { d: "M470 65L520 115" },
      { d: "M470 65L700 115" },
      { d: "M340 155L520 205" },
      { d: "M520 155V205" },
      { d: "M700 155L520 205" },
      { d: "M460 225H360", label: "결과", lx: 410, ly: 217 },
      { d: "M255 205V65", label: "부족 → 재계획", lx: 243, ly: 139, anchor: "end", tone: "loop" },
      { d: "M100 65V300", label: "범위 밖", lx: 106, ly: 186, anchor: "start" },
      { d: "M300 245L280 300", label: "충분", lx: 297, ly: 276, anchor: "start" },
      { d: "M330 320H370" },
      { d: "M490 320H530" },
      { d: "M580 300C560 262 450 262 440 300", label: "실패 → 재시도", lx: 510, ly: 267, tone: "retry" },
      { d: "M650 320H695", label: "통과", lx: 672, ly: 312 },
      { d: "M845 320H866" },
    ],
  },
  {
    id: "tall",
    className: "fad-graph fad-graph-tall",
    width: 340,
    height: 880,
    start: [110, 16],
    end: [170, 862],
    region: { x: 20, y: 100, w: 310, h: 448, label: "Supervisor 루프", lx: 322, ly: 116 },
    group: { x: 75, y: 258, w: 190, h: 144 },
    nodes: [
      { id: "guard", x: 110, y: 66, w: 110 },
      { id: "hold", x: 275, y: 66, w: 96 },
      { id: "plan", x: 170, y: 140, w: 150 },
      { id: "route", x: 170, y: 210, w: 150 },
      { id: "data", x: 170, y: 285, w: 170 },
      { id: "rag", x: 170, y: 330, w: 170 },
      { id: "kg", x: 170, y: 375, w: 170 },
      { id: "observe", x: 170, y: 440, w: 150 },
      { id: "judge", x: 170, y: 510, w: 150 },
      { id: "evidence", x: 170, y: 600, w: 150 },
      { id: "answer", x: 170, y: 670, w: 150 },
      { id: "verify", x: 170, y: 740, w: 150 },
      { id: "report", x: 170, y: 810, w: 170 },
    ],
    edges: [
      { d: "M110 23V46" },
      { d: "M165 66H227", label: "범위 밖", lx: 196, ly: 58 },
      { d: "M120 86L160 120" },
      { d: "M170 160V190" },
      { d: "M170 230V258" },
      { d: "M170 402V420" },
      { d: "M170 460V490" },
      { d: "M95 510C35 510 35 140 95 140", label: "부족 → 재계획", lx: 38, ly: 330, rotate: true, tone: "loop" },
      { d: "M170 530V580", label: "충분", lx: 176, ly: 562, anchor: "start" },
      { d: "M170 620V650" },
      { d: "M170 690V720" },
      { d: "M245 740C285 730 285 680 245 670", label: "재시도", lx: 290, ly: 709, anchor: "start", tone: "retry" },
      { d: "M170 760V790", label: "통과", lx: 176, ly: 778, anchor: "start" },
      { d: "M170 830V855" },
    ],
  },
];

function AgentGraph({ layout }: { layout: GraphLayout }) {
  const marker = `fad-arrowhead-${layout.id}`;
  const { region, group } = layout;
  return (
    <svg
      className={layout.className}
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      role="img"
      aria-label="LangGraph Supervisor 그래프: 범위 확인 후 Supervisor가 계획하고 데이터 분석, 문서 검색, 지식그래프 서브에이전트에 작업을 할당한다. 결과를 관찰해 근거가 부족하면 다시 계획하고, 충분하면 근거 조립, 답변 생성, 검증을 거쳐 리포트 에이전트가 산출물을 만든다. 검증에 실패하면 답변을 다시 생성하고, 범위 밖이면 답변을 보류한다."
    >
      <defs>
        <marker id={marker} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10Z" />
        </marker>
      </defs>
      <rect className="fad-graph-region" x={region.x} y={region.y} width={region.w} height={region.h} rx="16" />
      <text className="fad-graph-region-label" x={region.lx} y={region.ly} textAnchor="end">{region.label}</text>
      {group ? <rect className="fad-graph-group" x={group.x} y={group.y} width={group.w} height={group.h} rx="12" /> : null}
      <circle className="fad-graph-terminal" cx={layout.start[0]} cy={layout.start[1]} r="7" />
      <circle className="fad-graph-terminal fad-graph-end" cx={layout.end[0]} cy={layout.end[1]} r="7" />
      {layout.edges.map((edge) => (
        <g key={edge.d} className="fad-graph-edge" data-tone={edge.tone}>
          <path d={edge.d} markerEnd={`url(#${marker})`} />
          {edge.label ? (
            <text
              x={edge.lx}
              y={edge.ly}
              textAnchor={edge.anchor ?? "middle"}
              transform={edge.rotate ? `rotate(-90 ${edge.lx} ${edge.ly})` : undefined}
            >
              {edge.label}
            </text>
          ) : null}
        </g>
      ))}
      {layout.nodes.map((node) => {
        const text = graphText[node.id];
        return (
          <g key={node.id} className="fad-graph-node" data-kind={text.kind} transform={`translate(${node.x - node.w / 2} ${node.y - 20})`}>
            <rect width={node.w} height="40" rx="10" />
            <text className="fad-graph-label" x={node.w / 2} y="18">{text.label}</text>
            <text className="fad-graph-sub" x={node.w / 2} y="33">{text.sub}</text>
          </g>
        );
      })}
    </svg>
  );
}

type StepKind = "model" | "data" | "evidence" | "plain";
const badgeKind: Record<string, StepKind> = {
  LLM: "model",
  Embedding: "model",
  Reranker: "model",
  PostgreSQL: "data",
  pgvector: "data",
  Graphify: "data",
  "Knowledge Graph": "data",
  "근거 ID": "evidence",
  "근거 저장소": "evidence",
};

const lanes: { icon: IconName; name: string; tech: string; steps: [string, string][] }[] = [
  {
    icon: "database",
    name: "데이터 분석 에이전트",
    tech: "Text-to-SQL",
    steps: [["스키마·값 매칭", "카탈로그"], ["SQL 생성", "LLM"], ["AST 검증", "허용 뷰만"], ["읽기 전용 실행", "PostgreSQL"], ["결과 표", "근거 ID"]],
  },
  {
    icon: "search",
    name: "문서 검색 에이전트",
    tech: "RAG",
    steps: [["질의 구조화", "제품·기간 필터"], ["질의 재작성", "LLM"], ["질문 임베딩", "Embedding"], ["벡터 검색", "pgvector"], ["재순위", "Reranker"], ["승인 매핑 필터", "제품↔문서"], ["근거 구절", "근거 ID"]],
  },
  {
    icon: "graph",
    name: "지식그래프 에이전트",
    tech: "Graphify",
    steps: [["엔터티 연결", "제품·거래처"], ["그래프 탐색", "Knowledge Graph"], ["관계 경로", "연결 근거"], ["관련 제품·문서", "근거 ID"]],
  },
  {
    icon: "file",
    name: "리포트 에이전트",
    tech: "차트·보고서·파일",
    steps: [["검증된 근거 수집", "근거 저장소"], ["격차 계산", "코드 실행"], ["차트 스펙", "월별·워터폴"], ["보고서 작성", "LLM"], ["파일 생성", "내려받기"]],
  },
  {
    icon: "layers",
    name: "지식 적재 파이프라인",
    tech: "오프라인",
    steps: [["SAP 원장 적재", "버전 전환"], ["기술문서 청크", "전처리"], ["임베딩 색인", "pgvector"], ["엔터티·관계 추출", "Graphify"], ["지식그래프 구축", "Knowledge Graph"]],
  },
];

const legend = [
  { kind: "llm", label: "LLM 노드" },
  { kind: "agent", label: "서브에이전트" },
  { kind: "control", label: "제어 노드" },
  { kind: "stop", label: "종료 분기" },
] as const;

export function FarmscoAgentDiagram() {
  return (
    <figure className="fad" aria-label="팜스코 AI 에이전트 설계 구조">
      <figcaption>에이전트 설계 구조</figcaption>

      <p className="fad-part">① 전체 구성</p>
      <div className="fad-system">
        <div className="fad-user" style={{ gridArea: "user" }}>
          <div className="fad-card" data-tone="client">
            <span className="fad-icon fad-icon-lg"><Icon name="user" /></span>
            <strong>영업 직원</strong>
            <small>Next.js 화면</small>
          </div>
          <ul className="fad-outputs">
            <li><span className="fad-icon"><Icon name="chart" /></span>답변·차트</li>
            <li><span className="fad-icon"><Icon name="quote" /></span>근거 패널</li>
            <li><span className="fad-icon"><Icon name="file" /></span>보고서 파일</li>
          </ul>
        </div>

        <Arrow area="a1" label="질문" back="SSE" />

        <section className="fad-box" data-tone="spring" style={{ gridArea: "spring" }}>
          <h5>Spring Boot <small>업무 서버 · NCP</small></h5>
          <div className="fad-chips">
            <Chip icon="shield">인증·권한</Chip>
            <Chip icon="stream">SSE 단계 스트리밍</Chip>
            <Chip icon="layers">근거 저장소</Chip>
            <Chip icon="log">실행 기록·평가 이력</Chip>
          </div>
          <p className="fad-sub">도구 API</p>
          <div className="fad-chips">
            <Chip>SQL 검증·실행</Chip>
            <Chip>벡터 검색</Chip>
            <Chip>그래프 조회</Chip>
            <Chip>격차 계산</Chip>
            <Chip>파일 생성</Chip>
          </div>
        </section>

        <Arrow area="a2" label="그래프 실행" back="도구 호출" />

        <section className="fad-box" data-tone="graph" style={{ gridArea: "graph" }}>
          <h5>LangGraph <small>에이전트 관리</small></h5>
          <div className="fad-chips">
            <Chip icon="hub">Supervisor</Chip>
          </div>
          <p className="fad-sub">서브에이전트</p>
          <div className="fad-chips">
            <Chip icon="database">데이터 분석</Chip>
            <Chip icon="search">문서 검색 RAG</Chip>
            <Chip icon="graph">지식그래프</Chip>
            <Chip icon="file">리포트</Chip>
          </div>
          <p className="fad-sub">StateGraph 공유 상태</p>
          <div className="fad-chips fad-chips-plain">
            <Chip>질문</Chip>
            <Chip>작업 계획</Chip>
            <Chip>도구 결과</Chip>
            <Chip>근거 ID</Chip>
          </div>
        </section>

        <Arrow area="a3" label="추론" />

        <div className="fad-card" data-tone="model" style={{ gridArea: "model" }}>
          <span className="fad-icon fad-icon-lg"><Icon name="cpu" /></span>
          <strong>AI 모델</strong>
          <small>온프레미스 GPU · vLLM</small>
          <ul className="fad-pills">
            <li>LLM</li>
            <li>Embedding</li>
            <li>Reranker</li>
          </ul>
          <p className="fad-block">
            <span className="fad-icon"><Icon name="ban" /></span>
            DB 접근 없음
          </p>
        </div>

        <Arrow area="a4" label="읽기 전용 계정" vertical />

        <div className="fad-card fad-card-wide" data-tone="data" style={{ gridArea: "data" }}>
          <span className="fad-icon fad-icon-lg"><Icon name="database" /></span>
          <div>
            <strong>데이터</strong>
            <small><Icon name="lock" />PostgreSQL · 읽기 전용</small>
          </div>
          <ul className="fad-pills">
            <li>SAP 매출원장</li>
            <li>출하성적</li>
            <li>pgvector 문서 색인</li>
            <li>지식그래프</li>
          </ul>
        </div>
      </div>

      <p className="fad-part">② LangGraph Supervisor 루프</p>
      <div className="fad-graph-wrap">
        {graphLayouts.map((layout) => <AgentGraph key={layout.id} layout={layout} />)}
        <ul className="fad-legend">
          {legend.map((item) => (
            <li key={item.kind} data-kind={item.kind}><i />{item.label}</li>
          ))}
        </ul>
      </div>

      <p className="fad-part">③ 서브에이전트 내부</p>
      <ol className="fad-lanes">
        {lanes.map((lane) => (
          <li key={lane.name} className="fad-lane">
            <header>
              <span className="fad-icon"><Icon name={lane.icon} /></span>
              <strong>{lane.name}</strong>
              <em>{lane.tech}</em>
            </header>
            <ol>
              {lane.steps.map(([step, badge]) => (
                <li key={step}>
                  <span>
                    {step}
                    <b data-kind={badgeKind[badge] ?? "plain"}>{badge}</b>
                  </span>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </figure>
  );
}
