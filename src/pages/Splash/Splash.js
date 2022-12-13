import { useEffect, useState } from "react";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Navigate } from "react-router-dom";
import { ReactComponent as SplashIcon } from "../../img/Icon.svg";
import { ReactComponent as SplashLogo } from "../../img/Logo.svg";
import "./Splash.css";

const Splash = (props) => {
	const [redirect, setRedirect] = useState(false);
	const {
		getFetchAllItemsState,
		setFetchAllItems,
		getFetchCategoryAllState,
		setFetchCategoryAll,
	} = useContext(AppContext);

	const fetchFunctionAllItems = () => {
		setFetchAllItems(false, []);
		fetch("https://dummyjson.com/products/?limit=100")
			.then((response) => response.json())
			.then((allItems) => {
				setFetchAllItems(true, allItems.products);
			});
	};

	const fetchFunctionAllCategories = () => {
		setFetchCategoryAll(false, []);
		fetch("https://dummyjson.com/products/categories/")
			.then((response) => response.json())
			.then((allItems) => {
				setFetchCategoryAll(true, allItems);
			});
	};

	useEffect(fetchFunctionAllItems, []);
	useEffect(fetchFunctionAllCategories, []);

	const redirectToOnboarding = () => {
		return <Navigate to="/onboarding" />;
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setRedirect(true);
		}, 2500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="splash">
			<SplashIcon className="splash__icon" />
			<SplashLogo className="splash__logo" />
			<h2 className="splash__subheader">Your shopping solution</h2>
			{redirect &&
				getFetchAllItemsState() &&
				getFetchCategoryAllState &&
				redirectToOnboarding()}
		</div>
	);
};

export default Splash;
