import './Homepage.css'

function IntroSection({ className, id }) {
	return (
		<div className={className} id={id}>
			<h1 className="section-title">Welcome</h1>
		</div>
	);
}

function HomePage() {
	return (
		<div className="content-wrapper" id="home-content-wrapper">
			<IntroSection className="section home-section" id="home-section-intro" />
		</div>
	);
}

export default HomePage;
