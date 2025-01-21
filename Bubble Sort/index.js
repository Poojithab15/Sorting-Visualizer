const container = document.querySelector(".data-container");

function generatebars(num = 20) {
    for (let i = 0; i < num; i++) {
        const value = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.transform = `translateX(${i * 30}px)`;

        const barLabel = document.createElement("label");
        barLabel.classList.add("bar__id");
        barLabel.innerHTML = value;

        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}

async function BubbleSort(delay = 500) {
    let bars = document.querySelectorAll(".bar");
    let n = bars.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            await new Promise((resolve) => setTimeout(() => resolve(), delay));

            let val1 = parseInt(bars[j].childNodes[0].innerHTML);
            let val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

            if (val1 > val2) {
                // Swap the bars
                let temp1 = bars[j].style.height;
                let temp2 = bars[j].childNodes[0].innerText;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = temp1;
                bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
                bars[j + 1].childNodes[0].innerText = temp2;

                swapped = true;
            }

            bars[j].style.backgroundColor = "rgb(0, 183, 255)";
            bars[j + 1].style.backgroundColor = "rgb(0, 183, 255)";
        }

        // Mark the last element as sorted
        bars[n - i - 1].style.backgroundColor = "rgb(49, 226, 13)";
        
        if (!swapped) {
            break; // Stop if no elements were swapped in the inner loop
        }
    }

    // Enable buttons after sorting is done
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

generatebars();

function generate() {
    window.location.reload();
}

function disable() {
    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
