const PromoError = ({ error }) => {
	console.log(error);
	return (
		<div className="promo__error">
			<h1 className="promo__error-title">ERROR</h1>
			<h2
				onClick={() => {
					window.location.reload();
				}}
			>
				Click on me to reload page
			</h2>
			<p>{error}</p>
		</div>
	);
};

export default PromoError;
