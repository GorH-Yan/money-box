import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { IconContext } from "react-icons";
import Full from "../Full/Full";
const Box = () => {
    const [money, setMoney] = useState("");
    const [goal, setGoal] = useState("");
    const [showMoney, setShowMoney] = useState(0);
    const [showGoal, setShowGoal] = useState(0);
    const [active, setActive] = useState(false);
    const addInfo = (e) => {
        e.preventDefault();
        setShowMoney((prev) => prev + +money);
        setShowGoal((prev) => prev + +goal);
        setMoney("");
        setGoal("");
    };
    const reset = () => {
        setShowGoal(0);
        setShowMoney(0);
        setMoney("");
        setGoal("");
    };
    return (
        <>
            <div className="header">
                <h1>MONEY BOX ONLINE</h1>
            </div>
            <div className="allBox">
                <form onSubmit={(e) => addInfo(e)}>
                    <div className="uper">
                        <p>Enter the amount of money you want to raise!</p>
                        <input
                            value={goal}
                            type="number"
                            onChange={(e) => setGoal(e.target.value)}
                        />
                        <a onClick={reset}>
                            <IconContext.Provider
                                value={{
                                    className: "icon",
                                }}
                            >
                                <GrPowerReset />
                            </IconContext.Provider>
                        </a>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "20px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <h4>{showMoney}</h4>
                                <h4>{showGoal}</h4>
                            </div>
                            <div
                                style={{
                                    width: "100%",
                                    height: "30px",
                                    backgroundColor: "#EDF3F8",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    marginTop: "10px",
                                    userSelect: "none",
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor:
                                            showGoal && showMoney
                                                ? "#6D9CFF"
                                                : "",
                                        width:
                                            showMoney <= showGoal
                                                ? `${
                                                      (showMoney * 100) /
                                                      showGoal
                                                  }%`
                                                : "100%",
                                        height: "100%",
                                        textAlign: "end",
                                        paddingLeft: "5px",
                                        paddingRight: "5px",
                                        transition: ".3s",
                                        borderRadius: "20px",
                                        paddingTop: "6px",
                                    }}
                                >
                                    <p style={{ color: "white" }}>
                                        {showGoal
                                            ? Math.floor(
                                                  (showMoney * 100) / showGoal
                                              ) + "%"
                                            : ""}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lover">
                        <p>
                            Enter the amount of money to add that in Money Box!
                        </p>
                        <input
                            type="number"
                            value={money}
                            onChange={(e) => setMoney(e.target.value)}
                        />
                        <button>Add</button>
                    </div>
                </form>
            </div>
            {showMoney >= showGoal && showMoney && showGoal ? (
                <Full
                    showGoal={showGoal}
                    active={active}
                    setActive={setActive}
                    reset={reset}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default Box;
