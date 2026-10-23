import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import { FarmscoAgentDiagram } from "@/components/portfolio/FarmscoAgentDiagram";
import { portfolioCases, portfolioFamilies } from "@/data/portfolio";

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
          저는 업무 AI와 예약·실시간 음성 서비스의 화면과 API를 만들고, 울주 AI센터와 365MC의 클라우드 인프라를 구축·운영했습니다.
          이력서에 짧게 적은 성과 뒤에서 어떤 구조를 선택했고, 실패와 복구를 어떻게 다뤘는지 설명합니다.
        </p>
        <p className="portfolio-stance">
          AI의 데이터 접근 범위, 동시 요청의 정합성, 배포의 복구 경로를 서버와 운영 환경에서 확인합니다.
          성과 수치는 측정한 대상과 조건을 함께 적었습니다.
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
        {portfolioCases.map((project, index) => {
          const family = portfolioFamilies.find((item) => item.members[0].caseId === project.id);
          return (
            <Fragment key={project.id}>
              {family ? (
                <section className="portfolio-family" id={family.id} aria-labelledby={`${family.id}-title`}>
                  <p className="eyebrow">Product Family</p>
                  <h3 id={`${family.id}-title`}>{family.title}</h3>
                  <p>{family.lead}</p>
                  <ol>
                    {family.members.map((member, memberIndex) => (
                      <li key={member.caseId}>
                        <a href={`#${member.caseId}`}>
                          <span>{memberIndex === 0 ? "공통 엔진" : "파생"}</span>
                          <strong>{member.name}</strong>
                          {member.role}
                        </a>
                      </li>
                    ))}
                  </ol>
                </section>
              ) : null}
              <article className="portfolio-case" id={project.id} aria-labelledby={`${project.id}-title`}>
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

                {project.diagram === "farmsco-agent" ? <FarmscoAgentDiagram /> : null}

              {project.architecture ? (
                  <figure className="portfolio-architecture" aria-labelledby={`${project.id}-architecture`}>
                    <figcaption id={`${project.id}-architecture`}>{project.architecture.title}</figcaption>
                    <div className="portfolio-architecture-zones">
                      {project.architecture.zones.map((zone, zoneIndex) => (
                        <Fragment key={zone.name}>
                          {zoneIndex > 0 ? (
                            <p className="portfolio-architecture-link">
                              <span aria-hidden="true" />
                              {project.architecture.links[zoneIndex - 1]}
                            </p>
                          ) : null}
                          <section className="portfolio-architecture-zone">
                            <h5>{zone.name}</h5>
                            <p>{zone.note}</p>
                            <ul>
                              {zone.nodes.map((node) => (
                                <li key={node.name}>
                                  <strong>{node.name}</strong>
                                  {node.detail}
                                </li>
                              ))}
                            </ul>
                          </section>
                        </Fragment>
                      ))}
                    </div>
                  </figure>
                ) : null}

                <div className="portfolio-case-body">
                  <section>
                    <h4>문제</h4>
                    <p>{project.problem}</p>
                  </section>
                  {project.threats ? (
                    <section>
                      <h4>위협별 방어</h4>
                      <dl className="portfolio-threats">
                        {project.threats.map((item) => (
                          <div key={item.threat}>
                            <dt>{item.threat}</dt>
                            <dd>{item.defense}</dd>
                          </div>
                        ))}
                      </dl>
                    </section>
                  ) : null}
                  {project.cryptoFlow ? (
                    <section className="portfolio-case-wide">
                      <h4>{project.cryptoFlow.title}</h4>
                      <p className="portfolio-crypto-lead">{project.cryptoFlow.lead}</p>
                      <div className="portfolio-crypto-overview">
                        <div className="portfolio-keychain">
                          <h5>키 계층</h5>
                          <ol>
                            {project.cryptoFlow.keyChain.map((key) => (
                              <li key={key.name}>
                                {key.via ? <p className="portfolio-keychain-via">{key.via}</p> : null}
                                <div className="portfolio-keychain-key">
                                  <strong>{key.name}</strong>
                                  <span>{key.place}</span>
                                  <p>{key.detail}</p>
                                </div>
                              </li>
                            ))}
                          </ol>
                        </div>
                        <div className="portfolio-record">
                          <h5>저장소에 남는 객체 하나</h5>
                          <ol>
                            {project.cryptoFlow.record.map((part) => (
                              <li key={part.label}>
                                <strong>{part.label}</strong>
                                {part.detail}
                              </li>
                            ))}
                          </ol>
                          <p>평문 사진과 평문 데이터 키는 어디에도 저장하지 않습니다. 헤더는 암호화하지 않지만 AAD로 인증 태그에 묶여 있어, 한 글자만 바뀌어도 복호화가 실패합니다.</p>
                        </div>
                      </div>
                      {project.cryptoFlow.sequences.map((sequence) => (
                        <div className="portfolio-sequence" key={sequence.title}>
                          <h5>{sequence.title}</h5>
                          <ol style={{ "--lanes": sequence.lanes.length } as CSSProperties}>
                            {sequence.lanes.map((lane, laneIndex) => (
                              <li
                                aria-hidden="true"
                                className="portfolio-sequence-lane"
                                data-lane={laneIndex}
                                key={lane}
                                style={{ gridColumn: laneIndex + 1, gridRow: `1 / span ${sequence.steps.length + 1}` }}
                              >
                                {lane}
                              </li>
                            ))}
                            {sequence.steps.map((step, stepIndex) => (
                              <li
                                className="portfolio-sequence-step"
                                data-lane={step.lane}
                                key={step.title}
                                style={{ gridColumn: step.lane + 1, gridRow: stepIndex + 2 }}
                              >
                                <span className="portfolio-sequence-meta">
                                  <b>{stepIndex + 1}</b>
                                  <strong>{step.title}</strong>
                                  <span>{sequence.lanes[step.lane]}</span>
                                </span>
                                {step.detail}
                              </li>
                            ))}
                          </ol>
                        </div>
                      ))}
                    </section>
                  ) : null}
                  {project.pipelines?.map((pipeline) => (
                    <section className="portfolio-case-wide" key={pipeline.title}>
                      <h4>{pipeline.title}</h4>
                      <p className="portfolio-crypto-lead">{pipeline.lead}</p>
                      <ol className="portfolio-pipeline">
                        {pipeline.steps.map((step, stepIndex) => (
                          <li key={step.title}>
                            <span className="portfolio-pipeline-meta">
                              <b>{stepIndex + 1}</b>
                              <em>{step.badge}</em>
                            </span>
                            <strong>{step.title}</strong>
                            {step.detail}
                          </li>
                        ))}
                      </ol>
                    </section>
                  ))}
                  {project.walkthrough ? (
                    <section>
                      <h4>{project.walkthrough.title}</h4>
                      <div className="portfolio-walkthrough">
                        <ol>
                          {project.walkthrough.steps.map((step) => <li key={step}>{step}</li>)}
                        </ol>
                        {project.walkthrough.note ? <p>{project.walkthrough.note}</p> : null}
                      </div>
                    </section>
                  ) : null}
                  {project.gallery ? (
                    <section>
                      <h4>주요 동작 화면</h4>
                      <div className="portfolio-gallery">
                        {project.gallery.map((shot) => (
                          <figure key={shot.src}>
                            <Image src={shot.src} alt={shot.alt} width={1500} height={940} sizes="(max-width: 860px) 100vw, 760px" />
                            <figcaption>
                              <strong>{shot.title}</strong>
                              {shot.description}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </section>
                  ) : null}
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
              </article>
            </Fragment>
          );
        })}
      </section>

      <footer className="portfolio-footer">
        <p>프로젝트를 더 자세히 이야기할 때는 구현 선택뿐 아니라 실패 경로와 측정 조건까지 함께 설명하겠습니다.</p>
        <Link href="/">이력서로 돌아가기 →</Link>
      </footer>
    </main>
  );
}
