import Image from "next/image";

export default function PongWorld() {
	return (
		<>
			<div className="project-header">
				<h1>🏓 PongWorld</h1>
				<div className="project-link">
					<a
						href="https://github.com/Tscen-Rangers/ft_transcendence"
						target="_blank"
					>
						Github
					</a>
					<a
						href="https://www.notion.so/PongWorld-2ae22aa16e9543028f8ad0fbbb40c735"
						target="_blank"
					>
						Video
					</a>
				</div>
			</div>
			<div className="hash">
				<p>#SPA</p>
				<p>#GAME</p>
				<p>#WebSocket</p>
			</div>
			<p>
				PongWorld 프로젝트는 외부 라이브러리 없이 VanillaJS를 이용해 SPA
				방식으로 개발한 실시간 PingPong 게임 플랫폼입니다.
			</p>
			<br />
			<div>
				<h2>역할</h2>
				<p>&nbsp;-SPA구현</p>
				<p>&nbsp;-실시간 게임</p>
				<p>&nbsp;-실시간 채팅</p>
				<p>&nbsp;-로그인</p>
				<p>&nbsp;-마이페이지</p>
				<p>&nbsp;-모달구현</p>
			</div>
			<br />
			<div>
				<h2>개선 / 문제해결 사례 1 - 애니메이션 최적화</h2>
				<h3>&nbsp;문제</h3>
				<p>&nbsp;&nbsp;-탁구채를 60FPS으로 움직이면 버벅거리는 현상 발생</p>
				<br />
				<h3>&nbsp;원인</h3>
				<p>
					&nbsp;&nbsp;-setInterval : 기존에 아래와 같이 60FPS설정을
					setInterval()로 구현을 했다. 이 방법은 JavaScript 이벤트 루프 내에서
					비동기적으로 실행되며 정확한 타이머주기를 보장하지 않는다. 지연이
					누적되다 보면 프레임 드랍이 생긴다.
				</p>
				<Image
					src={"/pongWorldCode1.png"}
					alt="code1"
					width={100}
					height={100}
					style={{ width: "100%", height: "100%", maxWidth: "1200px" }}
				/>
				<br />
				<p>
					&nbsp;&nbsp;-리렌더링 : 탁구채의 위치를 변경할때 top, botton, left,
					right 등 position CSS 속성를 사용한다. 해당 속성은 다른 엘리먼트에
					영향을 끼치기 때문에 리플로우, 리페인트가 발생하게 된다. 탁구채가
					60프레임으로 움직이는데 1초에 60번씩 새로 화면을 그리게 되면서 환경에
					따라 버벅이는 현상이 생긴다.
				</p>
				<br />
				<h3>&nbsp;해결</h3>
				<p>
					&nbsp;&nbsp;-<strong>setInterval()</strong>대신{" "}
					<strong>requestAnimationFrame()</strong>을 사용 : 브라우저가 렌더링 될
					타이밍에 맞춰서 미리 함수를 예약을 해서 렌더링 주기에 맞는 부르더운
					애니메이션을 구현 할 수 있다.
				</p>
				<p>
					&nbsp;&nbsp;-<strong>position</strong>말고 <strong>transform</strong>
					속성을 이용 : 개발자 도구로 position과 translate를 각각 사용해서
					성능을 확인해보면 position은 레이아웃 변경과 더불어 리페인트,
					리플로우가 많이 일어난 것을 확인 할 수 있다. 그에 반해 translate는
					레이아웃 변경 없이 깔끔한 상태를 볼 수 있다. <br />
					&nbsp;그리고 translate는 GPU를 사용하는데 position은 연산이 많아져도
					CPU로만 연산을 수행해서 과부하가 올 수 있지만 translate는 연산을 할때
					GPU를 사용한다 GPU는 그래픽 처리에 특화된 하드웨어로, 병렬 처리 능력이
					뛰어나 많은 양의 계산을 빠르게 처리할 수 있다.
				</p>
				<div className="row-img">
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							textAlign: "center",
						}}
					>
						<Image
							src={"/position-img.png"}
							alt="code"
							width={100}
							height={100}
							style={{ width: "100%", height: "100%", maxWidth: "600px" }}
						/>
						position
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginLeft: "10px",
							textAlign: "center",
						}}
					>
						<Image
							src={"/translate-img.png"}
							alt="code"
							width={100}
							height={100}
							style={{ width: "100%", height: "100%", maxWidth: "600px" }}
						/>
						translate
					</div>
				</div>
				<h3>&nbsp;성과</h3>
				<p>
					&nbsp;&nbsp;-기존에 3초에 한 번씩 심하게 프레임 드랍이 있던 게
					리렌더링 최적화와 GPU 사용 그리고 애니메이션 최적화로 끊김 없이
					부드러운 플레이가 가능해졌asd다.asdadsqweqwe
				</p>
			</div>
			<style jsx>{`
				h1 {
					font-size: 2rem;
				}
				h2 {
					font-size: 1.5rem;
					border-bottom: 1px solid black;
				}
				h3 {
					font-size: 1.3rem;
				}
				a {
					text-decoration: none;
					color: #b23eff;
				}
				.hash {
					display: flex;
				}
				.hash > * {
					margin-right: 10px;
					padding: 7px;
					border-radius: 30px;
					background-color: #57006d3a;
					color: white;
				}
				.row-img {
					display: flex;
					flex-direction: row;
					justify-content: center;
				}
			`}</style>
		</>
	);
}
