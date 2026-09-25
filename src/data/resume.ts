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
    headline: "운영 리스크를 줄이는\n백엔드 개발자",
    summary:
      "병원·공공 서비스에서 DB 이관, HIS 보안 전환, 조회 성능 개선을 수행했습니다. NCP 인프라와 배치·실시간 AI 백엔드까지 직접 구축하고, 블루그린 무중단 배포를 이끌었습니다.",
  },
  contacts: [
    { label: "Phone", value: "010-9072-1938", href: "tel:01090721938" },
    { label: "Email", value: "snsk656@naver.com", href: "mailto:snsk656@naver.com" },
    { label: "Birth", value: "2000. 02. 08" },
    { label: "GitHub", value: "github.com/xogur", href: "https://github.com/xogur" },
  ] satisfies ContactLink[],
  highlights: [
    {
      value: "6개 DB",
      label: "운영 DB 무중단 이관",
      detail: "Azure → NCP · 조합키·건수·샘플 정합성 검증",
    },
    {
      value: "0.88초 → 0.03~0.05초",
      label: "병원 목록 조회",
      detail: "APM 원인 분석 · 인덱스·일괄 조회 개선",
    },
    {
      value: "중단 0분",
      label: "블루그린 무중단 배포",
      detail: "실제 트래픽 전환 · 이전 버전 복구 경로 확보",
    },
  ] satisfies Highlight[],
  strengths: [
    "HIS 보안 취약점 개선과 민감정보 API 접근 제어",
    "운영 DB 6개 무중단 이관·정합성 검증과 조회 병목 개선",
    "NCP 인프라 구축부터 블루그린 배포·롤백까지 운영",
    "Spring Boot 기반 RAG·Text-to-SQL 업무 AI 구현",
  ],
  experience: [
    {
      company: "UXROOM",
      role: "백엔드 개발자",
      period: "2025.11 - 현재",
      bullets: [
        "HIS의 환자정보 경로에서 무인증 조회·SQL 인젝션 위험·설정 노출을 발견했습니다. 사진관리 업무를 NCP 사설망 기반 서비스로 전환하고, 블루그린 무중단 배포를 달성했습니다.",
        "PK·CDC 제약에 맞춘 정합성 검증으로 병원 운영 DB 6개를 Azure에서 NCP로 서비스 중단 없이 이관했습니다.",
        "병원 장비 모니터링과 APM으로 태블릿 호환성 문제·반복 조회 병목을 추적하고, 목록 조회를 0.88초에서 0.03~0.05초로 단축했습니다.",
        "울주 AI센터의 예약 화면·API와 NCP 배포 경로를 직접 구축했습니다. 동시 예약 요청은 트랜잭션과 방 잠금으로 처리했고, 2026년 8월 예약 생성 294건을 중복 예약 없이 운영했습니다.",
        "실시간 음성 대화의 브라우저 입력부터 STT·LLM·TTS 출력까지 연결하고, STT 작업자의 준비·할당·교체와 중복 발화 처리를 구현했습니다.",
        "팜스코 영업 AI에서 SAP 매출·기술문서를 연결했습니다. 실제 팜스코 직원 평가 질문 1,182문항을 통과했습니다.",
      ],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      title: "365MC HIS 보안 전환·무중단 배포",
      subtitle: "OWASP Top 10 · NCP · Blue/Green",
      contribution:
        "환자정보를 다루는 HIS 경로에서 무인증 조회·SQL 인젝션 위험·설정 노출을 확인했습니다. 주요 업무를 분리하고 기존 사진관리 업무를 새 서비스로 전환했습니다.",
      technicalPoint:
        "NCP 사설망의 중앙 API에 업무·지점별 권한 검증, 암호화, 감사 로그를 적용했습니다. 배포 후보의 준비 상태를 확인한 뒤 트래픽을 전환하고 이전 버전을 복구용으로 유지했습니다.",
      impact:
        "새 API의 미인가 조회 거부와 검증 환경의 이상 로그인 알림을 확인했습니다. 실제 블루·그린 운영 전환을 완료했고, 전환 중 서비스 중단은 없었습니다.",
    },
    {
      title: "365MC 운영 DB 이관",
      subtitle: "Azure → NCP · MSSQL · 데이터 정합성",
      contribution: "운영 DB 6개를 Azure에서 NCP로 이관했습니다. PK 없는 테이블과 CDC 제약이 전환 과정의 핵심 난제였습니다.",
      technicalPoint: "조합키·건수·샘플 비교와 Python 자동 검증으로 데이터 정합성을 확인하고, 서비스 전환 전후 조회 경로를 점검했습니다.",
      impact: "6개 운영 DB를 서비스 중단 없이 전환했습니다.",
    },
    {
      title: "365MC 운영 모니터링·성능 개선",
      subtitle: "Prometheus/Grafana · APM · MSSQL",
      contribution: "병원 장비 상태, 태블릿 호환성 문제, 주요 목록 조회 지연을 운영 지표와 APM으로 추적했습니다.",
      technicalPoint: "장비 상태를 Prometheus/Grafana로 관측하고, APM에서 찾은 반복 조회와 인덱스 병목에 일괄 조회·인덱스 재설계를 적용했습니다.",
      impact: "태블릿 호환성 문제의 원인을 확인하고 주요 목록 조회를 0.88초에서 0.03~0.05초로 단축했습니다.",
    },
    {
      title: "울주 AI센터 예약 서비스·NCP 운영",
      subtitle: "NestJS · Next.js · TypeORM · NCP",
      contribution: "예약 화면부터 API·배포까지 구현했습니다. 같은 시간대에 요청이 겹칠 때 한 건만 확정하도록 예약 흐름을 설계했습니다.",
      technicalPoint: "트랜잭션 안에서 회원·방을 비관적 쓰기 잠금으로 조회하고 예약 시간 겹침을 검사해 충돌 요청을 거부했습니다. NCP 네트워크·방화벽과 이전 빌드 복구 경로도 구성했습니다.",
      impact: "2026년 8월 HTTP 요청 372,121건과 예약 생성 294건을 처리했고, 동일 슬롯 중복 예약 없이 운영 중입니다(웹·예약 로그 기준).",
    },
    {
      title: "병원 데이터 처리 자동화",
      subtitle: "Airflow · MSSQL · Oracle",
      contribution: "반복하던 운영 SQL·스크립트 실행을 Airflow 기반 스케줄 작업으로 전환했습니다.",
      technicalPoint: "17개 DAG를 구성하고 batch/fetch 크기, 건수 불일치, 누락 행 기준을 점검할 수 있도록 실행 흐름과 로그를 정리했습니다.",
      impact: "반복 운영 작업을 자동화하고 MSSQL 서버의 용량 고갈 징후를 조기에 발견해 장애를 예방했습니다.",
    },
    {
      title: "울주 AI센터 실시간 음성 대화",
      subtitle: "Python · FastAPI · WebSocket · STT/LLM/TTS",
      contribution: "AI가 말하는 도중 사용자가 다시 발화하는 상황을 고려해, 브라우저 음성 입력부터 AI 응답·음성 재생까지 구현했습니다.",
      technicalPoint: "WebSocket 세션에 준비된 STT 작업자를 할당하고 종료 시 교체했습니다. 동일 발화의 중복 생성과 STT 준비 실패 시 오류 전달·자원 정리를 처리했습니다.",
      impact: "발화 종료부터 첫 TTS 청크 수신까지 약 500ms 수준의 응답을 구현했습니다.",
    },
    {
      title: "팜스코 AX 영업 AI Agent",
      subtitle: "Spring Boot · RAG · Text-to-SQL",
      contribution:
        "SAP 매출 데이터와 기술문서의 근거가 분리돼 있던 영업 질의 흐름을 하나의 AI 백엔드로 연결했습니다.",
      technicalPoint:
        "LLM 생성 SQL은 구문·읽기 전용 DB 권한·제한된 뷰로 검증하고, 승인된 제품·문서 매핑이 있을 때만 문서 검색 결과와 결합했습니다.",
      impact:
        "SAP 매출원장 146,044행과 기술문서 근거를 한 답변에 연결했습니다. 실제 팜스코 직원 평가 질문 1,182문항을 통과했습니다.",
    },
  ] satisfies ProjectItem[],
  skills: [
    {
      title: "Core Backend",
      skills: ["Java", "Spring Boot", "Python", "FastAPI", "WebSocket"],
    },
    {
      title: "Data & Batch",
      skills: ["MSSQL", "PostgreSQL", "MySQL", "Airflow"],
    },
    {
      title: "AI Backend",
      skills: ["Spring AI", "RAG", "Text-to-SQL"],
    },
    {
      title: "Cloud & Observability",
      skills: ["NCP", "Azure", "Docker", "GitHub Actions", "Prometheus", "Grafana"],
    },
  ] satisfies SkillGroup[],
};
