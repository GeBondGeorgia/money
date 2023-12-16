import computerImg from "../../assets/images/computer.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="description" content="GBC error page" />

				<title>ERROR PAGE</title>

				<link
					rel="canonical"
					href="http://localhost:3000/promo-calculator-menu"
				/>
			</Helmet>
			<div>
				<img src={computerImg} alt="sad computer img" />
				<br />
				<h1>404 - Not Found</h1>
				<Link to="">Page was undefined click on me and go to main page</Link>
			</div>
		</>
	);
};

export default ErrorPage;
