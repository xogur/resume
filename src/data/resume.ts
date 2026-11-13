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
      value: "5개 서비스",
      label: "AI 서비스 단독 개발·운영",
      detail: "음성 AI 3종·AI 작곡·비전 카운팅, 상담 584세션·영어 발화 8,917건",
    },
    {
      value: "243건",
      label: "운영 중 공격 탐색 탐지·차단",
      detail: "365MC 사진 서비스 ALB 로그 51,820건 조사, 노출 0건·공격 IP 차단(2026.10)",
    },
  ] satisfies Highlight[],
  strengths: [
    "업무 AI 에이전트: LangGraph·RAG·Text-to-SQL 결합, 생성 SQL 접근 통제와 실제 질문 평가",
    "실시간 AI 백엔드: WebSocket 세션·STT Worker 수명주기, 스트리밍 TTS 첫 음성 1,019→137ms",
    "클라우드 인프라 설계·구축·운영: 네이버 클라우드(NCP) VPC·사설 서브넷·ALB·WAF·KMS, Blue/Green 무중단 배포",
    "보안 운영: KMS 암호화 저장·삭제 불가 백업, 공격 탐지·IP 차단, 레거시 SQL Injection 단계 전환",
    "DB 정합성·성능: 예약 충돌 제어, 6개 DB 무중단 이관, 목록 SQL 0.88초→0.03~0.05초",
  ],
  experience: [
    {
      company: "UXROOM",
      role: "AX 백엔드 개발자",
      period: "2025.11 - 현재",
      summary:
        "고객사가 외주로 맡긴 AI·백엔드 개발과 클라우드 운영을 프로젝트별로 혼자 맡고 있습니다.",
      bullets: [
        "팜스코·선우팜 AX: LangGraph 기반 업무 AI 에이전트를 만듭니다. 팜스코는 SAP 매출과 기술문서를 RAG·Text-to-SQL로 연결했고, 선우팜 프로젝트는 진행 중입니다.",
        "울주 AI센터: 실시간 음성 AI 3종, AI DJ 라운지, 방문자 카운팅·체류 분석, 예약 서비스와 이를 받치는 네이버 클라우드 인프라를 개발·운영합니다.",
        "365MC: 네이버 클라우드 인프라와 HIS 블루그린 배포, 사진 API, Airflow ETL을 운영합니다. 레거시 PHP 서버에서 웹셸·백도어를 찾아 격리하고 SQL Injection 진입점을 값 바인딩으로 단계 전환했으며, 지점 PC 상태는 Spring Boot·Prometheus·Grafana로 감시해 장애를 카카오워크로 알립니다.",
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
      contribution: "상담 AI(AI 비밀상담소)의 음성 엔진을 만들고, 같은 엔진으로 코쿤 부스의 AI 영어회화 키오스크(프리토킹 with AI)와 센터 입구의 안내 AI 에이전트를 개발·배포·운영합니다.",
      technicalPoint: "공통 엔진은 STT Worker 할당·교체, 끼어들기, 중복 발화 방지를 맡습니다. 영어 부스는 PC별 로컬 GPU와 서명된 원격 업데이트·자동 롤백으로 무인 운영하고, 안내 AI는 대화 중 도구를 골라 가이드 영상·예약 QR·코쿤 현황·3D 길안내를 화면에 띄웁니다.",
      impact: "2026년 7~10월 코쿤 영어 부스 예약 이용 112건·인식 발화 8,917건, 상담 부스 대화 세션 584건을 기록했습니다. 발음 채점 통과율을 아이 56%→93%, 성인 59%→95%로 재보정했습니다.",
      press: uljuPress,
    },
    {
      title: "울주 AI센터 AI DJ 라운지 (AI 작곡·라디오)",
      subtitle: "Spring Boot, JPA, FastAPI, LLM/TTS, Object Storage",
      contribution: "방문객이 요청한 곡을 AI가 만들고 AI DJ가 멘트·가사 싱크와 함께 틀어 주는 체험 서비스를 개발·배포·운영합니다.",
      technicalPoint: "곡 생성은 비관적 잠금·lease 기반 DB 작업 큐로 처리하고, 유료 생성 API의 제출 결과를 모르면 재제출하지 않아 중복 과금을 막았습니다. 완료 콜백은 HMAC으로, 생성 파일 다운로드는 호스트 allowlist·크기 상한으로 검증하고, LLM·TTS는 자체 호스팅 모델과 외부 API 사이에 폴백을 두었습니다.",
      impact: "테스트 111개를 통과한 이미지만 배포하고 준비 확인 실패 시 이전 이미지로 되돌립니다.",
    },
    {
      title: "울주 AI센터 방문자 카운팅·체류 분석",
      subtitle: "FastAPI, YOLOX, ByteTrack, Edge Agent, Next.js, MySQL",
      contribution: "카메라로 입장 인원과 영역별 체류시간을 재는 시스템을 현장 미니PC 설치 파일부터 분석 서버·대시보드까지 만들어 운영합니다.",
      technicalPoint: "미니PC가 443 포트로 먼저 연결(outbound WSS)해 공인 포트 없이 동작하고, 같은 카메라의 검출·추적은 두 기능이 한 번만 수행해 공유합니다. 운영 DB 계정은 4개 테이블의 조회·삽입·수정만 허용하고 원본 영상은 저장하지 않습니다.",
      impact: "카메라 끊김 중 busy-wait를 고쳐 운영 CPU 103.5%→3.1%, 입장 기록 조회 14.6초→0.2초로 줄였습니다.",
    },
    {
      title: "365MC 병원 데이터 ETL 파이프라인",
      subtitle: "Airflow, Python, Oracle, MSSQL, MySQL",
      contribution: "Oracle·MSSQL·MySQL·Azure DB와 파일 서버에 흩어진 병원 데이터를 모아 정제해 HIS와 APPA·LAMS 화면용으로 적재합니다. 21개 DAG를 작성·운영합니다.",
      technicalPoint: "Azure 동기화는 마지막 적재 지점 이후 행만 옮기고, 범위 밖 측정값은 결측으로 정제합니다. 적재는 스테이징 테이블을 거쳐 한 트랜잭션에서 교체하고, 0행·급감이면 교체를 건너뛰어 기존 데이터를 지킵니다.",
      impact: "정제 데이터로 수술 후 증상 예측은 10분마다, 마취 안전·지방흡입량·지방이식 예측과 일일 마감은 매일 적재합니다(2026.11.12 마취 안전 4,652건·지방흡입량 42,755건). 일 단위 예측 배치 3종은 최근 한 달간 실패·재시도가 없었습니다.",
    },
    {
      title: "울주 AI센터 예약 서비스·클라우드 구축·운영",
      subtitle: "네이버 클라우드(NCP) Gov, VPC, ALB, WAF, NestJS, Next.js",
      contribution: "울주 AI센터 네이버 클라우드 인프라와 예약 화면·API·배포 경로를 직접 구축·운영합니다.",
      technicalPoint: "공공기관용(Gov) 리전에 VPC를 설계해 ALB·WAF만 공개 서브넷에 두고 웹·API·DB는 사설 서브넷에 배치했습니다. 운영 접속은 Bastion·SSL VPN, 외부 송신은 NAT Gateway로만 열고, 예약은 방 비관적 잠금으로 동시 요청 중 한 건만 확정합니다. 공공기관 정보시스템 안정성 점검 기준에 맞춰 백업 정책, 장애 등급·전파 절차, 점검표, 패치 관리대장을 만들고, 접속로그 약 415만 건으로 핵심 기능 우선순위를 정했습니다.",
      impact: "2026년 8월 예약 294건을 동일 슬롯 중복 확정 없이 처리했습니다. 접속로그 수집 중단 장애를 Nginx 로그 형식 변경까지 추적해 누락 194,344건을 재적재·검증하고, 실패가 바로 드러나도록 상태 점검을 추가했습니다.",
    },
    {
      title: "365MC HIS 보안 전환·무중단 배포·DB 이관",
      subtitle: "Next.js, FastAPI, 네이버 클라우드(NCP), Blue/Green, MSSQL",
      contribution: "365MC 네이버 클라우드 인프라를 보안 요구에 맞춰 재구성·운영하고, HIS 사진관리 기능을 별도 API로 분리했으며, 운영 DB 6개를 Azure에서 네이버 클라우드로 이관했습니다.",
      technicalPoint: "외부 진입점은 ALB(TLS 1.2 이상)만 두고 사진 API는 인터넷 송신이 막힌 사설 서브넷에 두었습니다. 서버는 Access Key 없이 Server Role 임시 자격(AWS IAM Role 대응)으로 KMS·Object Storage(30일 삭제 불가 백업)에 접근하고, HIS·사진 API는 Blue/Green으로 전환합니다. DB 이관은 PK 없는 테이블·CDC 제약을 조합키·건수·샘플 비교 Python 검증으로 확인했습니다.",
      impact: "사진 API의 Blue/Green 전환·롤백 중 1,982초 동안 사진 조회 940건이 모두 성공했고, HIS 블루그린 전환과 6개 운영 DB 이관도 서비스 중단 없이 진행했습니다.",
    },
  ] satisfies ProjectItem[],
  skills: [
    {
      title: "AI",
      skills: ["LangGraph", "LangChain", "Spring AI", "vLLM", "RAG", "STT·TTS"],
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Python", "FastAPI"],
    },
    {
      title: "Frontend",
      skills: ["TypeScript", "Next.js"],
    },
    {
      title: "Data",
      skills: ["PostgreSQL", "MySQL", "MSSQL", "Airflow"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["네이버 클라우드(NCP, 실무)", "AWS(학습)", "Azure", "Docker", "GitHub Actions", "Prometheus·Grafana"],
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
