let b = 0;
let firstValue;

function plusFunction() {
    if (document.getElementById("screen").textContent !== '') {
        firstValue = document.getElementById("screen").textContent;

    }
    if (((document.getElementById("screenTwo").textContent).includes("+") == false&& (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false) && (b == 0 || firstValue !== undefined)) {
        document.getElementById("screenTwo").textContent += "+"
        console.log("mda")
    } else if (((document.getElementById("screenTwo").textContent).includes("/") == true || (document.getElementById("screenTwo").textContent).includes("-") || true && (document.getElementById("screenTwo").textContent).includes("*") == true || (document.getElementById("screenTwo").textContent).includes("/") == true) && b !==0) {
        document.getElementById("screenTwo").textContent = (document.getElementById("screenTwo").textContent).substring(0, (document.getElementById("screenTwo").textContent).length - 1);
        console.log(document.getElementById("screenTwo").textContent)
        document.getElementById("screenTwo").textContent += "+"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent+ "+";
    }
    document.getElementById("screen").textContent = "";
    b = -1;
}
document.getElementById("minus").addEventListener("click", minusFunction);

function minusFunction() {
    if (document.getElementById("screen").textContent !== '') {
        firstValue = document.getElementById("screen").textContent;

    }
    if (((document.getElementById("screenTwo").textContent).includes("+") == false&& (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false) && (b == 0 || firstValue !== undefined)) {
        document.getElementById("screenTwo").textContent += "-"
        console.log("mda")
    } else if (((document.getElementById("screenTwo").textContent).includes("/") == true || (document.getElementById("screenTwo").textContent).includes("-") || true && (document.getElementById("screenTwo").textContent).includes("*") == true || (document.getElementById("screenTwo").textContent).includes("/") == true) && b !==0) {
        document.getElementById("screenTwo").textContent = (document.getElementById("screenTwo").textContent).substring(0, (document.getElementById("screenTwo").textContent).length - 1);
        console.log(document.getElementById("screenTwo").textContent)
        document.getElementById("screenTwo").textContent += "-"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent+ "-";
    }
    document.getElementById("screen").textContent = "";
    b = 1;
}
document.getElementById("multiplication").addEventListener("click", multiplicationFunction);

function multiplicationFunction() {
    if (document.getElementById("screen").textContent !== '') {
        firstValue = document.getElementById("screen").textContent;

    }
    if (((document.getElementById("screenTwo").textContent).includes("+") == false&& (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false) && (b == 0 || firstValue !== undefined)) {
        document.getElementById("screenTwo").textContent += "*"
        console.log("mda")
    } else if (((document.getElementById("screenTwo").textContent).includes("/") == true || (document.getElementById("screenTwo").textContent).includes("-") || true && (document.getElementById("screenTwo").textContent).includes("*") == true || (document.getElementById("screenTwo").textContent).includes("/") == true) && b !==0) {
        document.getElementById("screenTwo").textContent = (document.getElementById("screenTwo").textContent).substring(0, (document.getElementById("screenTwo").textContent).length - 1);
        console.log(document.getElementById("screenTwo").textContent)
        document.getElementById("screenTwo").textContent += "*"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent+ "*";
    }
    document.getElementById("screen").textContent = "";
    b = 2;
}
document.getElementById("division").addEventListener("click", divisionFunction);

function divisionFunction() {
    if (document.getElementById("screen").textContent !== '') {
        firstValue = document.getElementById("screen").textContent;

    }
    if (((document.getElementById("screenTwo").textContent).includes("+") == false&& (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false) && (b == 0 || firstValue !== undefined)) {
        document.getElementById("screenTwo").textContent += "/"
        console.log("mda")
    } else if (((document.getElementById("screenTwo").textContent).includes("/") == true || (document.getElementById("screenTwo").textContent).includes("-") || true && (document.getElementById("screenTwo").textContent).includes("*") == true || (document.getElementById("screenTwo").textContent).includes("/") == true) && b !==0) {
        document.getElementById("screenTwo").textContent = (document.getElementById("screenTwo").textContent).substring(0, (document.getElementById("screenTwo").textContent).length - 1);
        console.log(document.getElementById("screenTwo").textContent)
        document.getElementById("screenTwo").textContent += "/"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent+ "/";
    }
    document.getElementById("screen").textContent = "";
    b = -2;
}
document.getElementById("reverse").addEventListener("click", reverseFunction);

function reverseFunction() {
    document.getElementById("screen").textContent = (document.getElementById("screen").textContent).substring(0, (document.getElementById("screen").textContent).length - 1);
}
document.getElementById("zero").addEventListener("click", zeroFunction);
document.getElementById("fraction").addEventListener("click", fractionFunction);

function fractionFunction() {
    let v = document.getElementById("screen").textContent;
    console.log((document.getElementById("screen").textContent).includes("."))
    if (v.includes('.') == false && document.getElementById("screen").textContent !== '') {
        if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
            document.getElementById("screenTwo").textContent += "."
        } else {
            document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
        }
        document.getElementById("screen").textContent += '.';
    }
}
document.getElementById("factorial").addEventListener("click", factorialFunction);

function factorialFunction() {
    let q = parseInt(document.getElementById("screen").textContent),
        col = 1;
    for (let i = 1; i <= q; i++) {
        col *= i;
    }
    document.getElementById("screen").textContent = `${col}`;
    if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
        document.getElementById("screenTwo").textContent += "!"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
    }
}
document.getElementById("minusZero").addEventListener("click", minusThanZeroFunction);

function minusThanZeroFunction() {
    if (document.getElementById("screen").textContent == '') {
        document.getElementById("screen").textContent += '-'
        if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
            document.getElementById("screenTwo").textContent += "-"
        } else {
            document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
        }
    }
}
document.getElementById("power").addEventListener("click", powerFunction);
let powerNumber;
let dr = 0;
document.getElementById("ok").addEventListener("click", powerFunction)

function powerFunction() {
    let powerNumberToAll = parseFloat(document.getElementById("screen").textContent);
    console.log(powerNumberToAll)
    if (document.getElementById("screen").textContent !== '') {
        if (dr == 0) {
            document.getElementsByClassName("power-icon-section")[0].style.display = "block";
            dr++;
        } else {
            document.getElementsByClassName("power-icon-section")[0].style.display = "none";
            dr--;
        }
        powerNumber = parseFloat(document.getElementById("powerNumberScreen").textContent);
        if (document.getElementById("powerNumberScreen").textContent !== '') {
            let powerUp = powerNumberToAll;
            if (powerNumber > 0) {
                for (let r = 1; r < powerNumber; r++) {
                    powerUp *= powerNumberToAll;

                }
                console.log(powerUp)
                document.getElementById("screen").textContent = powerUp;
                if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
                    document.getElementById("screenTwo").textContent += `^${powerNumber}`
                } else {
                    document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
                }
            } else if (powerNumber == 0) {
                document.getElementById("screen").textContent = 1;
                if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
                    document.getElementById("screenTwo").textContent += `^${powerNumber}`
                } else {
                    document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
                }
            } else {
                for (let gh = 1; gh < (powerNumber / (-1)); gh++) {
                    powerUp *= powerNumberToAll;
                }
                document.getElementById("screen").textContent = 1 / powerUp;
                if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
                    document.getElementById("screenTwo").textContent += `^${powerNumber}`
                } else {
                    document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
                }
            }
            document.getElementById("powerNumberScreen").textContent = '';
        }
    }
}


function zeroFunction() {
    document.getElementById("screen").textContent += "0";
    if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
        document.getElementById("screenTwo").textContent += "0"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
    }
}
document.getElementById("one").addEventListener("click", oneFunction);

function oneFunction() {
    document.getElementById("screen").textContent += "1";
    if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
        document.getElementById("screenTwo").textContent += "1"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
    }
}
document.getElementById("two").addEventListener("click", twoFunction);

function twoFunction() {
    document.getElementById("screen").textContent += "2";
    if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
        document.getElementById("screenTwo").textContent += "2"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
    }
}
document.getElementById("three").addEventListener("click", threeFunction);

function threeFunction() {
    document.getElementById("screen").textContent += "3";
    if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
        document.getElementById("screenTwo").textContent += "3"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
    }
}
document.getElementById("plus").addEventListener("click", plusFunction);

document.getElementById("equals").addEventListener("click", equalsFunction);
document.getElementById("four").addEventListener("click", fourFunction);

function fourFunction() {
    document.getElementById("screen").textContent += "4";
    if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
        document.getElementById("screenTwo").textContent += "4"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
    }
}
document.getElementById("five").addEventListener("click", fiveFunction);

function fiveFunction() {
    document.getElementById("screen").textContent += "5";
    if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
        document.getElementById("screenTwo").textContent += "5"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
    }
}
document.getElementById("six").addEventListener("click", sixFunction);

function sixFunction() {
    document.getElementById("screen").textContent += "6";
    if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
        document.getElementById("screenTwo").textContent += "6"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
    }
}
document.getElementById("seven").addEventListener("click", sevenFunction);

function sevenFunction() {
    document.getElementById("screen").textContent += "7";
    if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
        document.getElementById("screenTwo").textContent += "7"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
    }
}
document.getElementById("eight").addEventListener("click", eightFunction);

function eightFunction() {
    document.getElementById("screen").textContent += "8";
    if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
        document.getElementById("screenTwo").textContent += "8"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
    }
}
document.getElementById("nine").addEventListener("click", nineFunction);

function nineFunction() {
    document.getElementById("screen").textContent += "9";
    if ((document.getElementById("screenTwo").textContent).includes("+") == false && (document.getElementById("screenTwo").textContent).includes("-") == false && (document.getElementById("screenTwo").textContent).includes("*") == false && (document.getElementById("screenTwo").textContent).includes("/") == false && b == 0 || firstValue !== undefined) {
        document.getElementById("screenTwo").textContent += "9"
    } else {
        document.getElementById("screenTwo").textContent = document.getElementById("screen").textContent;
    }
}

function equalsFunction() {
    let secondValue = document.getElementById("screen").textContent;
    if (b === 1) {
        console.log(firstValue);
        console.log(parseInt(firstValue));
        console.log(secondValue)
        document.getElementById("screen").textContent = parseFloat(firstValue) - parseFloat(secondValue);

        firstValue = undefined;
        b = 0;
    } else if (b === 2) {
        console.log(firstValue);
        console.log(parseInt(firstValue));
        console.log(secondValue)

        document.getElementById("screen").textContent = parseFloat(firstValue) * parseFloat(secondValue);
        firstValue = undefined;
        b = 0;
    } else if (b === -2) {
        console.log(firstValue);
        console.log(parseInt(firstValue));
        console.log(secondValue)

        document.getElementById("screen").textContent = parseFloat(firstValue) / parseFloat(secondValue);
        firstValue = undefined;
        b = 0;
    } else if (b === -1) {
        console.log(firstValue);
        console.log(parseInt(firstValue));
        console.log(secondValue)

        document.getElementById("screen").textContent = parseFloat(firstValue) + parseFloat(secondValue);
        firstValue = undefined;
        b = 0;
    }

}
document.getElementById("zeroPower").addEventListener("click", zeroFunctionPower);

function zeroFunctionPower() {
    document.getElementById("powerNumberScreen").textContent += "0";

}
document.getElementById("onePower").addEventListener("click", oneFunctionPower);

function oneFunctionPower() {
    document.getElementById("powerNumberScreen").textContent += "1";

}
document.getElementById("twoPower").addEventListener("click", twoFunctionPower);

function twoFunctionPower() {
    document.getElementById("powerNumberScreen").textContent += "2";

}
document.getElementById("threePower").addEventListener("click", threeFunctionPower);

function threeFunctionPower() {
    document.getElementById("powerNumberScreen").textContent += "3";

}
document.getElementById("fourPower").addEventListener("click", fourFunctionPower);

function fourFunctionPower() {
    document.getElementById("powerNumberScreen").textContent += "4";

}
document.getElementById("fivePower").addEventListener("click", fiveFunctionPower);

function fiveFunctionPower() {
    document.getElementById("powerNumberScreen").textContent += "5";

}
document.getElementById("sixPower").addEventListener("click", sixFunctionPower);

function sixFunctionPower() {
    document.getElementById("powerNumberScreen").textContent += "6";

}
document.getElementById("sevenPower").addEventListener("click", sevenFunctionPower);

function sevenFunctionPower() {
    document.getElementById("powerNumberScreen").textContent += "8";

}
document.getElementById("eightPower").addEventListener("click", eightFunctionPower);

function eightFunctionPower() {
    document.getElementById("powerNumberScreen").textContent += "8";

}
document.getElementById("ninePower").addEventListener("click", nineFunctionPower);

function nineFunctionPower() {
    document.getElementById("powerNumberScreen").textContent += "9";

}
document.getElementById("reversePower").addEventListener("click", reverseFunctionPower);

function reverseFunctionPower() {
    document.getElementById("powerNumberScreen").textContent = (document.getElementById("powerNumberScreen")
        .textContent).substring(0, (document.getElementById("powerNumberScreen").textContent).length - 1);
}
document.getElementById("minusThanZeroPower").addEventListener("click", minusThanZeroFunctionPower);

function minusThanZeroFunctionPower() {
    if (document.getElementById("powerNumberScreen").textContent == '') {
        document.getElementById("powerNumberScreen").textContent += '-'
    }
}
document.getElementById("theme").addEventListener("click", themeChanger);

function themeChanger() {
    document.querySelector("body").classList.toggle("theme-change");
    document.getElementsByClassName("name")[0].classList.toggle("color-change")
    document.getElementsByClassName("copyright")[0].classList.toggle("color-change")
    document.getElementsByClassName("btn-number")[0].classList.toggle("border-change")
    document.getElementById("theme").classList.toggle("change-icon");
    document.getElementById("powerSection").classList.toggle("theme-change")
    document.getElementsByClassName("operations")[0].classList.toggle("color-change");
}
document.getElementById("reverse").addEventListener('contextmenu', reverseLong)

function reverseLong() {
    window.location.reload()
}
let pageWidth = document.documentElement.scrollWidth;

function monitoring() {
    pageWidth = document.documentElement.scrollWidth;
    if (pageWidth < 1200) {
        document.getElementById("safe").style.display = "none";
    } else {
        document.getElementById("safe").style.display = "block";
    }
    setTimeout(monitoring, 3000)
}
console.log(monitoring())