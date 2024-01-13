import React, { useEffect } from "react";

const Full = ({ showGoal, active, setActive, reset }) => {
    useEffect(() => {
        setActive(!active);
    }, []);
    const resetAll = () => {
        reset();
        setActive(!active);
    };
    return (
        <div className={active ? "overlay" : ""}>
            <div className={active ? "showFull active" : "showFull"}>
                <h3>You've raised {showGoal} you need for your goal!!!</h3>
                <h4>Do you want to continue or create a new Money Box?</h4>
                <div>
                    <button onClick={() => setActive(!active)}>Continue</button>
                    <button onClick={resetAll}>Create new Money Box</button>
                </div>
            </div>
        </div>
    );
};

export default Full;
