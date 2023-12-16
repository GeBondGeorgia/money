import { useEffect, useState } from "react";
import serverAPI from "../../../server/serverAPI";
import userImg from "../../../assets/images/user.png";

import "./sponsorContent.scss";
const SponsorContent = () => {
	const [user, setUser] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [nextUserNumber, setNextUserNumber] = useState(0);
	const [isUserChanging, setIsUserChanging] = useState("sponsor__user-content");

	useEffect(() => {
		const fetchData = async () => {
			setIsUserChanging("sponsor__user-content--changing");
			try {
				const users = await serverAPI("user");
				const usersLength = users.length;
				if (usersLength === 0) {
					setFetchError("No users available.");
					return;
				}

				setNextUserNumber((prevNumber) => (prevNumber + 1) % usersLength);
				setUser(users[nextUserNumber]);
				setIsUserChanging("sponsor__user-content");
			} catch (error) {
				setFetchError(error.messages);
			}
		};

		const intervalId = setInterval(fetchData, 19000);

		return () => clearInterval(intervalId);
	}, [nextUserNumber]);

	if (fetchError) {
		return (
			<div>
				<h1>ERROR</h1>
				{fetchError}
			</div>
		);
	}
	return (
		<div className="sponsor__content">
			<h1 className="sponsor__title title">Our sponsor</h1>

			<h2 className="sponsor__subtitle subtitle">
				Thank you for helping this project live
			</h2>
			<button className="sponsor__user ">
				<div className={isUserChanging}>
					{user?.imageData === undefined && user?.imageName === undefined ? (
						<img src={userImg} className="sponsor__img" alt="userImg" />
					) : (
						<img
							src={user.imageData}
							className="sponsor__img"
							alt={user.imageName}
						/>
					)}
					<h2 className="sponsor__nick">{user.username}</h2>
					<h2 className="sponsor__value">
						Donated: {user.donateAmount + " " + user.currency}{" "}
					</h2>

					<p className="sponsor__description">{user.description}</p>
				</div>
			</button>
		</div>
	);
};

export default SponsorContent;
