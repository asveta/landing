import React, {useRef, useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import img_arrow from "../../assets/arrow.svg";
import ForStudentsHero from "../../components/Students/ForStudentsHero";
import Filter from "../../components/Filter";
import {render} from "@testing-library/react";
import Modal from "../../components/Modal";
import firebase from "firebase";

function ChildEduFilter() {
    const [request, setRequest] = useState({});

    const addRequest = (id, category) => {
        let updatedRequest = request;
        updatedRequest[category] === id
            ? delete updatedRequest[category]
            : (updatedRequest[category] = id);
        setRequest(updatedRequest);
    };

    const getFormRequest = () => {
        render(<Modal request={request} />);
        document.body.classList.add("body-modal");
        firebase.analytics().logEvent("open_form");
    };

    const resultsRef = useRef(null);

    const getInitialData = async () => {
        firebase
            .database()
            .ref("Classes/")
            .once("value")
            .then((snapshot) => {
                setFilteredClasses(snapshot.val());
            });
    };

    const [filteredClases, setFilteredClasses] = useState(null);
    const filterClasses = () => {
        getInitialData().then(resultsRef.current.scrollIntoView());
        console.log(filteredClases);

        // firebase.analytics().logEvent("filter_classes");
    };

    return (
        <div className="">
            <Filter
                addRequest={addRequest}
                getFormRequest={getFormRequest}
                filterClasses={filterClasses}
            />
        </div>
    );
}

export default ChildEduFilter;
