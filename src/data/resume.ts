export type ContactLink = {
  label: string;
  value: string;
  href?: string;
};

export type Highlight = {
  value: string;
  label: string;
  detail: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  contribution: string;
  technicalPoint: string;
  impact: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const resume = {
  profile: {
    name: "권태혁",
    role: "Backend Developer",
    currentPosition: "UXROOM 백엔드 개발자",
    tagline: "Java/Spring 기반 실무형 서버 개발자",
    photo: "/profile.jpg",
    summary:
      "운영 DB 이관, 배치 자동화, 모니터링, CI/CD/NCP 인프라, 예약 동시성 제어, 실시간 AI 비밀 대화 백엔드를 경험했습니다.",
  },
  contacts: [
    { label: "Phone", value: "010-9072-1938", href: "tel:01090721938" },
    { label: "Email", value: "snsk656@naver.com", href: "mailto:snsk656@naver.com" },
    { label: "Birth", value: "2000. 02. 08" },
    { label: "GitHub", value: "github.com/xogur", href: "https://github.com/xogur" },
    { label: "Blog", value: "taehyuck.tistory.com", href: "https://taehyuck.tistory.com/" },
  ] satisfies ContactLink[],
  highlights: [
    {
      value: "1,000만+",
      label: "건 DB 이관",
      detail: "CDC 제약 상황에서 조합키 기반 검증 전략 설계",
    },
    {
      value: "97%",
      label: "쿼리 최대 단축",
      detail: "SQL Server 인덱스와 N+1성 조회 제거",
    },
    {
      value: "17개",
      label: "Airflow DAG 자동화",
      detail: "수동 SQL·스크립트 운영 업무 스케줄링",
    },
    {
      value: "500ms 미만",
      label: "TTS 재생 평균 지연",
      detail: "STT -> LLM -> TTS -> WebSocket 저지연 파이프라인",
    },
  ] satisfies Highlight[],
  strengths: [
    "운영 중인 서비스의 DB 이관과 정합성 검증",
    "Airflow 기반 배치 자동화와 운영 리스크 조기 감지",
    "NCP 인프라, Load Balancer, ACG, CI/CD 배포 자동화",
    "예약 API 동시성 제어와 실패 원인 추적",
    "실시간 AI 비밀 대화 백엔드와 저지연 스트리밍",
  ],
  experience: [
    {
      company: "UXROOM",
      role: "백엔드 개발자",
      period: "2025.11 - 현재",
      bullets: [
        "Azure MSSQL에서 NCP Cloud for MSSQL로 6개 DB, 약 100개 테이블, 1,000만+ 건 데이터를 서비스 영향 없이 이관했습니다.",
        "Airflow 로그로 MSSQL 서버 용량 고갈 위험을 조기 감지하고, 주요 서비스의 DB 의존을 NCP MSSQL로 전환해 장애를 예방했습니다.",
        "울주 AI센터 홈페이지의 NCP 인프라를 단독 구축하고 Load Balancer -> PIOLINK -> 서버 흐름과 ACG 정책을 구성했습니다.",
        "울주 AI센터 프로젝트 중 하나인 실시간 AI 비밀 대화의 STT -> LLM -> TTS 저지연 백엔드 파이프라인을 구현했습니다.",
        "GitHub Actions CI/CD에서 배포 산출물과 환경 설정을 분리해 배포 실패 시 이전 빌드로 복구 가능한 구조를 구성했습니다.",
        "울주 AI센터 예약 API에 낙관적 락과 요청 로그를 적용해 동일 슬롯 중복 예약 방지 및 실패 원인 추적이 가능하게 했습니다.",
        "SQL Server 인덱스와 N+1성 조회 제거로 주요 목록 쿼리를 LAMS 기준 0.88초에서 0.03~0.05초로 단축했습니다.",
      ],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      title: "365MC DB 마이그레이션",
      subtitle: "Azure MSSQL -> NCP Cloud for MSSQL",
      contribution: "운영 중인 병원 서비스의 핵심 DB를 Azure MSSQL에서 NCP Cloud for MSSQL로 이관했습니다.",
      technicalPoint: "PK가 없는 테이블과 CDC 제약을 고려해 조합키 기반 검증, 건수 비교, 샘플링, Python 자동 검증을 적용했습니다.",
      impact: "6개 DB, 약 100개 테이블, 1,000만+ 건 데이터를 운영 중단 없이 이관했습니다.",
    },
    {
      title: "병원 운영 모니터링 및 성능 개선",
      subtitle: "Prometheus/Grafana · SQL Server Optimization",
      contribution: "병원 운영 장비 관측과 레거시 서비스의 주요 조회 성능 개선을 맡았습니다.",
      technicalPoint: "5개 지점 29대 장비를 Prometheus/Grafana로 관측하고, 인터셉터형 APM 분석을 바탕으로 SQL Server 인덱스와 batch query를 적용했습니다.",
      impact: "특정 태블릿 호환성 문제를 발견했고 주요 목록 쿼리 응답 시간을 최대 97% 단축했습니다.",
    },
    {
      title: "실시간 AI 비밀 대화",
      subtitle: "울주 AI센터 연계 프로젝트 · Realtime AI Voice",
      contribution: "울주 AI센터 홈페이지와 별도인 연계 프로젝트에서 실시간 AI 대화 백엔드 파이프라인을 구현했습니다.",
      technicalPoint: "STT -> LLM -> TTS -> WebSocket 흐름에서 응답 생성과 음성 재생 시작까지의 지연을 줄이는 구조로 최적화했습니다.",
      impact: "사용자 발화 후 TTS 재생까지의 평균 지연을 500ms 미만으로 낮춰 실시간 대화감을 확보했습니다.",
    },
    {
      title: "Airflow 기반 병원 운영 데이터 자동화",
      subtitle: "Airflow · MSSQL · Oracle · Batch Pipeline",
      contribution: "반복적인 운영 SQL·스크립트 실행 업무를 Airflow 기반 배치 파이프라인으로 전환했습니다.",
      technicalPoint: "17개 스케줄 DAG를 구성하고 batch/fetch size, row count mismatch, skipped row threshold를 설정했습니다.",
      impact: "운영 데이터 처리를 자동화하고 MSSQL 서버 용량 고갈 위험을 조기 감지했습니다.",
    },
  ] satisfies ProjectItem[],
  skills: [
    {
      title: "Core Backend",
      skills: ["Java", "Spring Boot", "Python", "FastAPI", "NestJS", "Next.js", "WebSocket"],
    },
    {
      title: "Data & Batch",
      skills: ["MSSQL", "MySQL", "PostgreSQL", "Redis", "Airflow", "SQL Optimization"],
    },
    {
      title: "Infra & Observability",
      skills: ["NCP", "Load Balancer", "ACG", "Docker", "GitHub Actions", "Prometheus", "Grafana"],
    },
    {
      title: "Focus Areas",
      skills: ["API", "Batch Automation", "Monitoring", "Deployment Automation", "Concurrency Control", "Realtime AI API"],
    },
  ] satisfies SkillGroup[],
};
