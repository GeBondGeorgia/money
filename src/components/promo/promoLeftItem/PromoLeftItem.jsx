import { lazy, Suspense } from "react";
const PromoCalculatorButtons = lazy(() =>
	import("./promoCalculatorButtons/PromoCalculatorButtons")
);
const PromoDonateForm = lazy(() => import("./promoDonateForm/PromoDonateForm"));

const PromoLeftItem = () => {
	if (window.location.pathname === "/promo-donate-form") {
		return (
			<div className="promo__left">
				<h1 className="promo__title promo__title-donate">Donate Form</h1>
				<Suspense fallback={<div>LOADING...</div>}>
					<PromoDonateForm />
				</Suspense>
			</div>
		);
	} else if (window.location.pathname === "/promo-calculator-menu" || "/") {
		return (
			<Suspense fallback={<div>LOADING...</div>}>
				<PromoCalculatorButtons />
			</Suspense>
		);
	}
};

export default PromoLeftItem;
