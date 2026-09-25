import type { Metadata } from "next";
import Link from "next/link";
import { portfolioCases } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "권태혁 | 프로젝트 포트폴리오",
  description:
    "AI 백엔드, NCP 클라우드 인프라, 병원 HIS, 예약 동시성, 성능 개선, 데이터 이관의 문제·설계 선택·검증 결과를 정리한 포트폴리오입니다.",
};

export default function PortfolioPage() {
  return (
    <main className="page-shell portfolio-shell">
      <header className="portfolio-intro">
        <Link className="portfolio-back" href="/">
          ← 이력서로 돌아가기
        </Link>
        <p className="eyebrow">Engineering Portfolio</p>
        <h1>기능 뒤에 있는 판단을 보여드립니다.</h1>
        <p className="portfolio-lead">
          저는 AI 백엔드와 클라우드 인프라를 직접 만들고 운영합니다. 이력서에는 무엇을 했는지 짧게 적었습니다.
          여기에는 왜 그 구조를 선택했는지, 실패를 어떻게 다루었는지, 어디까지 확인했는지를 담았습니다.
        </p>
        <p className="portfolio-stance">
          모델 출력은 권한이 아니고, 배포 성공은 운영 검증의 끝이 아니며, 숫자는 측정 범위를 떠나면 성과가 될 수 없습니다.
          이 세 가지 기준이 아래 프로젝트를 관통합니다.
        </p>
      </header>

      <nav className="portfolio-nav" aria-label="프로젝트 목차">
        <h2>프로젝트 바로가기</h2>
        <ol>
          {portfolioCases.map((project) => (
            <li key={project.id}>
              <a href={`#${project.id}`}>{project.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      <section className="portfolio-principles" aria-labelledby="portfolio-principles-title">
        <p className="eyebrow">How I Work</p>
        <h2 id="portfolio-principles-title">제가 설계에서 먼저 확인하는 것</h2>
        <div>
          <article>
            <h3>신뢰 경계</h3>
            <p>AI가 만든 SQL, 브라우저의 사용자 정보, 외부 API 응답은 서버가 다시 검증합니다. 편리한 경로가 권한 우회가 되지 않게 합니다.</p>
          </article>
          <article>
            <h3>실패와 복구</h3>
            <p>동시 요청, 작업자 준비 실패, 배포 전환, 데이터 이관에서 실패 후의 상태를 먼저 그립니다. 이전 버전과 데이터를 어떻게 되찾을지도 함께 정합니다.</p>
          </article>
          <article>
            <h3>측정의 범위</h3>
            <p>SQL 실행 시간은 API 시간과 구분하고, 합성 사진의 파일 크기는 운영 비용과 구분합니다. 확인한 범위만 성과로 적습니다.</p>
          </article>
        </div>
      </section>

      <section className="portfolio-work" aria-labelledby="portfolio-work-title">
        <p className="eyebrow">Selected Work</p>
        <h2 id="portfolio-work-title">프로젝트별 문제·선택·검증</h2>
        {portfolioCases.map((project, index) => (
          <article className="portfolio-case" id={project.id} key={project.id} aria-labelledby={`${project.id}-title`}>
            <header>
              <p className="portfolio-case-number">{String(index + 1).padStart(2, "0")} / {project.area}</p>
              <h3 id={`${project.id}-title`}>{project.title}</h3>
              <p className="portfolio-case-lead">{project.lead}</p>
              <ul className="portfolio-tags" aria-label="사용 기술">
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </header>

            {project.flow ? (
              <p className="portfolio-flow"><strong>흐름</strong> {project.flow.join(" → ")}</p>
            ) : null}

            <div className="portfolio-case-body">
              <section>
                <h4>문제</h4>
                <p>{project.problem}</p>
              </section>
              <section>
                <h4>설계와 구현</h4>
                <ul>
                  {project.decisions.map((decision) => <li key={decision}>{decision}</li>)}
                </ul>
              </section>
              <section>
                <h4>확인한 결과</h4>
                <ul>
                  {project.verification.map((result) => <li key={result}>{result}</li>)}
                </ul>
              </section>
            </div>
            <p className="portfolio-message"><strong>전달하고 싶은 메시지</strong>{project.message}</p>
            {project.boundary ? <p className="portfolio-boundary"><strong>측정·검증 범위</strong>{project.boundary}</p> : null}
          </article>
        ))}
      </section>

      <footer className="portfolio-footer">
        <p>프로젝트를 더 자세히 이야기할 때는 구현 선택뿐 아니라 실패 경로와 측정 조건까지 함께 설명하겠습니다.</p>
        <Link href="/">이력서로 돌아가기 →</Link>
      </footer>
    </main>
  );
}
