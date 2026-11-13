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
  summary?: string;
  bullets: string[];
};

export type PressLink = {
  outlet: string;
  date: string;
  title: string;
  href: string;
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  contribution: string;
  technicalPoint: string;
  impact: string;
  press?: PressLink[];
};

// 울주 AI센터 개관 보도. 경상일보 원문 주소를 찾지 못해 Daum 게재본을 쓴다.
export const uljuPress: PressLink[] = [
  {
    outlet: "경상일보 르포",
    date: "2026.7.3",
    title: "[르포]울산 최초 '울주 AI 교육센터'를 가다",
    href: "https://v.daum.net/v/20260703014823184",
  },
  {
    outlet: "울산매일",
    date: "2026.7.2",
    title: "AI 배우고 체험까지…울산 첫 'AI 교육센터' 울주군에 개관",
    href: "https://www.iusm.co.kr/news/articleView.html?idxno=1064854",
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const resume = {
  profile: {
    name: "권태혁",
    role: "AX Backend Developer",
    currentPosition: "UXROOM AX 백엔드 개발자",
    tagline: "고객사 AI·클라우드 인프라 프로젝트 단독 수행",
    photo: "/profile.jpg",
    headline: "업무 AI를 만들고\n운영 인프라까지 책임집니다",
    summary:
      "고객사(팜스코·선우팜·365MC·울주 AI센터)가 맡긴 AI·백엔드 개발과 클라우드 운영을 혼자 수행합니다. LangGraph 기반 업무 AI 에이전트와 실시간 음성 대화 AI를 만들고, 실제 직원 질문으로 답변 품질을 검증했습니다. 울주 AI센터와 365MC의 클라우드 인프라(네이버 클라우드 NCP)도 직접 설계·구축·운영하며, 사설망·권한 경계·암호화 저장·무중단 배포로 보안 요구를 맞췄습니다.",
  },
  contacts: [
    { label: "전화", value: "010-9072-1938", href: "tel:01090721938" },
    { label: "이메일", value: "snsk656@naver.com", href: "mailto:snsk656@naver.com" },
    { label: "생년월일", value: "2000. 02. 08" },
    { label: "GitHub", value: "github.com/xogur", href: "https://github.com/xogur" },
  ] satisfies ContactLink[],
  highlights: [
    {
      value: "1,182문항",
      label: "업무 AI 답변 실무 검수 승인",
      detail: "팜스코 직원 실제 질문, SAP 매출 146,044행과 기술문서 근거",
    },
    {
      value: "3개 서비스",
      label: "실시간 음성 AI 단독 개발·운영",
      detail: "상담 584세션, 영어회화 인식 발화 8,917건(2026.7~10)",
    },
    {
      value: "0.03~0.05초",
      label: "병원 목록 SQL 실행 시간",
      detail: "기존 0.88초, APM 원인 분석과 인덱스·일괄 조회 개선",
    },
  ] satisfies Highlight[],
  strengths: [
    "업무 AI 에이전트: LangGraph·RAG·Text-to-SQL 결합, 생성 SQL 접근 통제와 실제 질문 평가",
    "실시간 AI 백엔드: WebSocket 세션·STT Worker 수명주기 관리",
    "울주 AI센터·365MC 클라우드 인프라(네이버 클라우드 NCP) 직접 설계·구축·운영",
    "보안·비용 설계: KMS 키 보호·암호화 저장·변경분 백업",
    "DB 정합성·성능: 예약 충돌 제어·6개 DB 이관·조회 병목 개선",
  ],
  experience: [
    {
      company: "UXROOM",
      role: "AX 백엔드 개발자",
      period: "2025.11 - 현재",
      summary:
        "고객사가 외주로 맡긴 AI·백엔드 개발과 클라우드 운영을 프로젝트별로 혼자 맡고 있습니다.",
      bullets: [
        "팜스코·선우팜 AX: LangGraph·LangChain·Langfuse 기반 업무 AI 에이전트를 만듭니다. 팜스코에서는 SAP 매출과 기술문서를 RAG·Text-to-SQL로 연결하고 생성 SQL의 접근 범위를 제어했으며, 같은 구조로 선우팜 프로젝트를 수행하고 있습니다.",
        "울주 AI센터: 센터의 서비스 대부분을 혼자 만들고 운영합니다. 상담·영어회화·안내 실시간 음성 AI 3종과 AI DJ 라운지, 방문자 카운팅·체류 분석, 예약 화면·API, 네이버 클라우드(NCP) 인프라를 담당하며, 동시 예약은 트랜잭션과 방 잠금으로 처리해 2026년 8월 예약 294건을 중복 없이 운영했습니다.",
        "365MC: 네이버 클라우드(NCP) 인프라를 보안 요구에 맞춰 재구성·운영하고 HIS 블루그린 배포, 사진관리 API 권한 검증·암호화 저장을 구축했습니다. APM으로 SQL 병목을 개선하고, 운영 DB 6개를 Azure에서 네이버 클라우드로 서비스 중단 없이 이관했습니다. 여러 DB와 파일 서버에 흩어진 병원 데이터는 Airflow ETL로 모아 정제·적재합니다.",
      ],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      title: "팜스코 AX 영업 AI Agent",
      subtitle: "Spring Boot, LangGraph, vLLM, RAG, Text-to-SQL",
      contribution:
        "SAP 매출 데이터와 기술문서의 근거가 분리돼 있던 영업 질의 흐름을 하나의 AI 백엔드로 연결했습니다.",
      technicalPoint:
        "매출 질의는 제한된 뷰·읽기 전용 DB 계정의 Text-to-SQL로 처리하고 생성 SQL을 구문 검증했습니다. 승인된 제품·문서 매핑이 있을 때만 RAG 문서 근거를 결합했습니다. 문서 검색은 PostgreSQL의 pgvector와 Reranker로 구성하고, 모델은 온프레미스 GPU의 vLLM으로 동시 요청과 자원 할당을 관리했습니다.",
      impact:
        "SAP 매출원장 146,044행과 기술문서 근거를 한 답변에 연결했습니다. 실제 팜스코 직원 평가 질문 1,182문항의 답변이 업무 담당자의 검수 기준을 충족해 승인받았습니다.",
    },
    {
      title: "울주 AI센터 실시간 음성 AI (상담·영어회화·안내)",
      subtitle: "Python, FastAPI, WebSocket, STT/LLM/TTS, Docker",
      contribution: "상담 AI(AI 비밀상담소)의 음성 엔진을 만들고, 같은 엔진으로 코쿤 부스의 AI 영어회화 키오스크(프리토킹 with AI)와 센터 입구의 안내 AI 에이전트를 혼자 개발·배포·운영합니다.",
      technicalPoint: "공통 엔진은 STT Worker 할당·교체, 끼어들기, 중복 발화 방지를 맡습니다. 영어 부스는 PC별 로컬 GPU와 서명된 원격 업데이트·자동 롤백으로 무인 운영하고, 안내 AI는 대화 중 도구를 골라 가이드 영상·예약 QR·코쿤 현황·3D 길안내를 화면에 띄웁니다.",
      impact: "2026년 7~10월 코쿤 영어 부스 예약 이용 112건·인식 발화 8,917건, 상담 부스 대화 세션 584건을 기록했습니다. 발음 채점 통과율을 아이 56%→93%, 성인 59%→95%로 재보정했습니다.",
      press: uljuPress,
    },
    {
      title: "울주 AI센터 AI DJ 라운지 (AI 작곡·라디오)",
      subtitle: "Spring Boot, JPA, FastAPI, LLM/TTS, Object Storage",
      contribution: "방문객이 요청한 곡을 AI가 만들고 AI DJ가 멘트·가사 싱크와 함께 틀어 주는 체험 서비스를 혼자 개발·배포·운영합니다.",
      technicalPoint: "곡 생성은 비관적 잠금·lease 기반 DB 작업 큐로 처리하고, 유료 생성 API의 제출 결과를 모르면 재제출하지 않아 중복 과금을 막았습니다. 완료 콜백은 HMAC으로, 생성 파일 다운로드는 호스트 allowlist·크기 상한으로 검증하고, LLM·TTS는 자체 호스팅 모델과 외부 API 사이에 폴백을 두었습니다.",
      impact: "테스트 111개를 통과한 이미지만 배포하고 준비 확인 실패 시 이전 이미지로 되돌립니다.",
    },
    {
      title: "울주 AI센터 방문자 카운팅·체류 분석",
      subtitle: "FastAPI, YOLOX, ByteTrack, Edge Agent, Next.js, MySQL",
      contribution: "카메라로 입장 인원과 영역별 체류시간을 재는 시스템을 현장 미니PC 설치 파일부터 분석 서버·대시보드까지 혼자 만들어 운영합니다.",
      technicalPoint: "미니PC가 443 포트로 먼저 연결(outbound WSS)해 공인 포트 없이 동작하고, 같은 카메라의 검출·추적은 두 기능이 한 번만 수행해 공유합니다. 운영 DB 계정은 4개 테이블의 조회·삽입·수정만 허용하고 원본 영상은 저장하지 않습니다.",
      impact: "카메라 끊김 중 busy-wait를 고쳐 운영 CPU 103.5%→3.1%, 입장 기록 조회 14.6초→0.2초로 줄였습니다.",
    },
    {
      title: "365MC 병원 데이터 ETL 파이프라인",
      subtitle: "Airflow, Python, Oracle, MSSQL, MySQL",
      contribution: "Oracle·MSSQL·MySQL·Azure DB와 파일 서버에 흩어진 병원 데이터를 모아 정제해 HIS와 APPA·LAMS 화면용으로 적재합니다. 21개 DAG를 혼자 작성·운영합니다.",
      technicalPoint: "Azure 동기화는 마지막 적재 지점 이후 행만 옮기고, 범위 밖 측정값은 결측으로 정제합니다. 적재는 스테이징 테이블을 거쳐 한 트랜잭션에서 교체하고, 0행·급감이면 교체를 건너뛰어 기존 데이터를 지킵니다.",
      impact: "정제 데이터로 수술 후 증상 예측은 10분마다, 마취 안전·지방흡입량·지방이식 예측과 일일 마감은 매일 적재합니다(2026.11.12 마취 안전 4,652건·지방흡입량 42,755건). 일 단위 예측 배치 3종은 최근 한 달간 실패·재시도가 없었습니다.",
    },
    {
      title: "365MC 조회 성능 개선",
      subtitle: "APM, MSSQL, Next.js, 사진 API",
      contribution: "병원 목록 SQL의 반복 조회와 사진 갤러리의 원본 일괄 로딩 병목을 추적했습니다.",
      technicalPoint: "목록 SQL은 일괄 조회·인덱스 재설계로, 사진 목록은 480px 썸네일 지연 로딩과 확대 시 원본 조회로 바꿨습니다.",
      impact: "목록 SQL 실행 시간 0.88초→0.03~0.05초, 목록 이미지 크기 1.08MB→123KB(합성 사진 1건, 각각 별도 측정).",
    },
    {
      title: "울주 AI센터 예약 서비스·클라우드 구축",
      subtitle: "NestJS, Next.js, TypeORM, 네이버 클라우드(NCP)",
      contribution: "울주 AI센터의 네이버 클라우드(NCP) 인프라와 예약 화면·API·배포 경로를 직접 구축하고 운영합니다.",
      technicalPoint: "클라우드 네트워크·방화벽과 이전 빌드 복구 경로를 구성하고, 방을 비관적 쓰기 잠금으로 조회해 동시 요청 중 한 건만 확정합니다.",
      impact: "2026년 8월 웹 요청 372,121건, 예약 294건을 동일 슬롯 중복 확정 없이 처리했습니다.",
    },
    {
      title: "365MC HIS 보안 전환·무중단 배포·DB 이관",
      subtitle: "Next.js, FastAPI, 네이버 클라우드(NCP), Blue/Green, MSSQL",
      contribution: "365MC 클라우드 인프라(네이버 클라우드 NCP)를 보안 요구에 맞춰 재구성·운영하고, HIS 사진관리 기능을 별도 API로 분리했으며, 운영 DB 6개를 Azure에서 네이버 클라우드로 이관했습니다.",
      technicalPoint: "사설망 사진 API에 업무·지점별 권한 검증·감사 로그와 KMS 키 보호 암호화 저장을 적용하고, HIS는 트래픽 전환·이전 버전 복구가 가능하게 구성했습니다. DB 이관은 PK 없는 테이블과 CDC 제약을 조합키·건수·샘플 비교와 Python 자동 검증으로 확인했습니다.",
      impact: "사진 API의 미인가 조회 거부를 확인했고, 합성 5MB 사진 암호화 저장 크기를 6.67MB→5.00MB로 줄였습니다. HIS 블루그린 전환·DB 이관은 서비스 중단 없이 진행했습니다.",
    },
  ] satisfies ProjectItem[],
  skills: [
    {
      title: "AI Backend",
      skills: ["Spring AI", "LangGraph", "LangChain", "Langfuse", "vLLM", "MCP", "RAG", "pgvector", "Reranker", "Text-to-SQL", "STT/LLM/TTS", "YOLOX/ByteTrack"],
    },
    {
      title: "Core Backend",
      skills: ["Java", "Spring Boot", "NestJS", "TypeORM", "Python", "FastAPI", "WebSocket"],
    },
    {
      title: "Frontend",
      skills: ["TypeScript", "React", "Next.js"],
    },
    {
      title: "Data & Batch",
      skills: ["MSSQL", "PostgreSQL", "MySQL", "Oracle", "Airflow"],
    },
    {
      title: "Cloud & Observability",
      skills: ["네이버 클라우드(NCP)", "Object Storage", "KMS", "Azure", "Docker", "GitHub Actions", "Prometheus", "Grafana"],
    },
  ] satisfies SkillGroup[],
  credentials: [
    {
      title: "학력",
      skills: ["창원대학교 정보통신공학과 학사 졸업(2025.02)"],
    },
    {
      title: "자격증",
      skills: ["정보처리기사", "SQLD", "ADsP", "컴퓨터활용능력 1급", "IoT 지식능력검정"],
    },
  ] satisfies SkillGroup[],
};
