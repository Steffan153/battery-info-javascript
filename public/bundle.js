(()=>{"use strict";eval('\n;// CONCATENATED MODULE: ./src/functions.ts\nconst progressBar = document.getElementById("progressBar");\nlet oldClassName;\nconst changeBatteryColor = (value) => {\n    let className = "";\n    if (value >= 75 && value <= 100)\n        className = "bg-success";\n    else if (value >= 50 && value <= 75)\n        className = "bg-info";\n    else if (value >= 25 && value <= 50)\n        className = "bg-warning";\n    else if (value >= 0 && value <= 25)\n        className = "bg-danger";\n    oldClassName = className;\n    return className;\n};\nconst changeEmoji = (value) => {\n    const emojiImage = document.getElementById("emoji");\n    if (value >= 75 && value <= 100)\n        emojiImage.src = "./img/emojis/green.png";\n    else if (value >= 50 && value <= 75)\n        emojiImage.src = "./img/emojis/blue.png";\n    else if (value >= 25 && value <= 50)\n        emojiImage.src = "./img/emojis/yellow.png";\n    else if (value >= 0 && value <= 25)\n        emojiImage.src = "./img/emojis/red.png";\n};\nconst displayChargingText = (isCharging) => {\n    const chargingText = document.getElementById("chargingText");\n    if (isCharging)\n        chargingText.classList.remove("d-none");\n    else\n        chargingText.classList.add("d-none");\n};\nconst formatBatteryLevel = (batteryLevel) => {\n    const strBatteryLevel = String(batteryLevel * 100);\n    if (strBatteryLevel[strBatteryLevel.length - 1] === "0")\n        return strBatteryLevel + "%";\n    else\n        return String((batteryLevel * 100).toFixed(1)) + "%";\n};\n// Change Level function\nfunction changeLevel(battery) {\n    const progress = document.getElementById("progress");\n    const batteryLevel = formatBatteryLevel(battery.level);\n    // Change Battery color\n    if (oldClassName)\n        progressBar.classList.remove(oldClassName); // removing the prev classname\n    progressBar.classList.add(changeBatteryColor(battery.level * 100));\n    progressBar.style.width = batteryLevel;\n    progress.innerText = batteryLevel;\n    // Change the emoji\n    changeEmoji(battery.level * 100);\n    return batteryLevel;\n}\n// Animate when charging function\nconst changeChargingAnimation = (isCharging) => {\n    if (isCharging) {\n        progressBar.classList.add("progress-bar-animated"); // Display text "Charging..."\n    }\n    else {\n        progressBar.classList.remove("progress-bar-animated"); // Display text "Charging..."\n    }\n    displayChargingText(isCharging);\n};\nconst changeDoneIn = (ch, disch) => {\n    const doneIn = document.getElementById("doneIn");\n    if (ch !== Infinity) {\n        doneIn.innerText = `Your battery will be fully charged in ${(ch / 60) | 0} mins`;\n    }\n    else if (disch !== Infinity) {\n        doneIn.innerText = `Your battery will be dead in ${(disch / 60) | 0} mins`;\n    }\n    else {\n        doneIn.innerText = "";\n    }\n};\n\n;// CONCATENATED MODULE: ./src/app.ts\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst navigatorObj = navigator;\nlet batteryLevel, isCharging;\n// MAIN Function Start\nfunction showBattery() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const battery = yield navigatorObj.getBattery();\n            isCharging = battery.charging;\n            // Change Level\n            batteryLevel = changeLevel(battery);\n            changeChargingAnimation(battery.charging);\n            changeDoneIn(battery.chargingTime, battery.dischargingTime);\n        }\n        catch (err) { }\n    });\n}\n// MAIN Funtion End\nif ("getBattery" in navigator) {\n    showBattery();\n    setInterval(showBattery, 1000);\n}\nelse {\n    const unsupportedDiv = document.querySelector(".unsupported");\n    const supportedDiv = document.querySelector(".supported");\n    unsupportedDiv.style.display = "block";\n    supportedDiv.style.display = "none";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0ZXJ5LWluZm8tamF2YXNjcmlwdC8uL3NyYy9mdW5jdGlvbnMudHM/OGEwNyIsIndlYnBhY2s6Ly9iYXR0ZXJ5LWluZm8tamF2YXNjcmlwdC8uL3NyYy9hcHAudHM/MDY2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFtQixDQUFDO0FBQzdFLElBQUksWUFBb0IsQ0FBQztBQUV6QixNQUFNLGtCQUFrQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7SUFDM0MsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ25CLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksR0FBRztRQUFFLFNBQVMsR0FBRyxZQUFZLENBQUM7U0FDckQsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQUUsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUN0RCxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUU7UUFBRSxTQUFTLEdBQUcsWUFBWSxDQUFDO1NBQ3pELElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtRQUFFLFNBQVMsR0FBRyxXQUFXLENBQUM7SUFDNUQsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUN6QixPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ3BDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFxQixDQUFDO0lBQ3hFLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksR0FBRztRQUFFLFVBQVUsQ0FBQyxHQUFHLEdBQUcsd0JBQXdCLENBQUM7U0FDdEUsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQUUsVUFBVSxD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eyBCYXR0ZXJ5VHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc0JhclwiKSBhcyBIVE1MRGl2RWxlbWVudDtcbmxldCBvbGRDbGFzc05hbWU6IHN0cmluZztcblxuY29uc3QgY2hhbmdlQmF0dGVyeUNvbG9yID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG4gIGlmICh2YWx1ZSA+PSA3NSAmJiB2YWx1ZSA8PSAxMDApIGNsYXNzTmFtZSA9IFwiYmctc3VjY2Vzc1wiO1xuICBlbHNlIGlmICh2YWx1ZSA+PSA1MCAmJiB2YWx1ZSA8PSA3NSkgY2xhc3NOYW1lID0gXCJiZy1pbmZvXCI7XG4gIGVsc2UgaWYgKHZhbHVlID49IDI1ICYmIHZhbHVlIDw9IDUwKSBjbGFzc05hbWUgPSBcImJnLXdhcm5pbmdcIjtcbiAgZWxzZSBpZiAodmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAyNSkgY2xhc3NOYW1lID0gXCJiZy1kYW5nZXJcIjtcbiAgb2xkQ2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gY2xhc3NOYW1lO1xufTtcblxuY29uc3QgY2hhbmdlRW1vamkgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICBjb25zdCBlbW9qaUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbW9qaVwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICBpZiAodmFsdWUgPj0gNzUgJiYgdmFsdWUgPD0gMTAwKSBlbW9qaUltYWdlLnNyYyA9IFwiLi9pbWcvZW1vamlzL2dyZWVuLnBuZ1wiO1xuICBlbHNlIGlmICh2YWx1ZSA+PSA1MCAmJiB2YWx1ZSA8PSA3NSkgZW1vamlJbWFnZS5zcmMgPSBcIi4vaW1nL2Vtb2ppcy9ibHVlLnBuZ1wiO1xuICBlbHNlIGlmICh2YWx1ZSA+PSAyNSAmJiB2YWx1ZSA8PSA1MClcbiAgICBlbW9qaUltYWdlLnNyYyA9IFwiLi9pbWcvZW1vamlzL3llbGxvdy5wbmdcIjtcbiAgZWxzZSBpZiAodmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAyNSkgZW1vamlJbWFnZS5zcmMgPSBcIi4vaW1nL2Vtb2ppcy9yZWQucG5nXCI7XG59O1xuXG5jb25zdCBkaXNwbGF5Q2hhcmdpbmdUZXh0ID0gKGlzQ2hhcmdpbmc6IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgY2hhcmdpbmdUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJjaGFyZ2luZ1RleHRcIlxuICApIGFzIEhUTUxIZWFkaW5nRWxlbWVudDtcbiAgaWYgKGlzQ2hhcmdpbmcpIGNoYXJnaW5nVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xuICBlbHNlIGNoYXJnaW5nVGV4dC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xufTtcblxuY29uc3QgZm9ybWF0QmF0dGVyeUxldmVsID0gKGJhdHRlcnlMZXZlbDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgc3RyQmF0dGVyeUxldmVsID0gU3RyaW5nKGJhdHRlcnlMZXZlbCAqIDEwMCk7XG4gIGlmIChzdHJCYXR0ZXJ5TGV2ZWxbc3RyQmF0dGVyeUxldmVsLmxlbmd0aCAtIDFdID09PSBcIjBcIilcbiAgICByZXR1cm4gc3RyQmF0dGVyeUxldmVsICsgXCIlXCI7XG4gIGVsc2UgcmV0dXJuIFN0cmluZygoYmF0dGVyeUxldmVsICogMTAwKS50b0ZpeGVkKDEpKSArIFwiJVwiO1xufTtcblxuLy8gQ2hhbmdlIExldmVsIGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTGV2ZWwoYmF0dGVyeTogQmF0dGVyeVR5cGUpOiBzdHJpbmcge1xuICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG4gIGNvbnN0IGJhdHRlcnlMZXZlbCA9IGZvcm1hdEJhdHRlcnlMZXZlbChiYXR0ZXJ5LmxldmVsKTtcblxuICAvLyBDaGFuZ2UgQmF0dGVyeSBjb2xvclxuICBpZiAob2xkQ2xhc3NOYW1lKSBwcm9ncmVzc0Jhci5jbGFzc0xpc3QucmVtb3ZlKG9sZENsYXNzTmFtZSk7IC8vIHJlbW92aW5nIHRoZSBwcmV2IGNsYXNzbmFtZVxuICBwcm9ncmVzc0Jhci5jbGFzc0xpc3QuYWRkKGNoYW5nZUJhdHRlcnlDb2xvcihiYXR0ZXJ5LmxldmVsICogMTAwKSk7XG4gIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYmF0dGVyeUxldmVsO1xuICBwcm9ncmVzcy5pbm5lclRleHQgPSBiYXR0ZXJ5TGV2ZWw7XG5cbiAgLy8gQ2hhbmdlIHRoZSBlbW9qaVxuICBjaGFuZ2VFbW9qaShiYXR0ZXJ5LmxldmVsICogMTAwKTtcbiAgcmV0dXJuIGJhdHRlcnlMZXZlbDtcbn1cblxuLy8gQW5pbWF0ZSB3aGVuIGNoYXJnaW5nIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgY2hhbmdlQ2hhcmdpbmdBbmltYXRpb24gPSAoaXNDaGFyZ2luZzogYm9vbGVhbikgPT4ge1xuICBpZiAoaXNDaGFyZ2luZykge1xuICAgIHByb2dyZXNzQmFyLmNsYXNzTGlzdC5hZGQoXCJwcm9ncmVzcy1iYXItYW5pbWF0ZWRcIik7IC8vIERpc3BsYXkgdGV4dCBcIkNoYXJnaW5nLi4uXCJcbiAgfSBlbHNlIHtcbiAgICBwcm9ncmVzc0Jhci5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXCIpOyAvLyBEaXNwbGF5IHRleHQgXCJDaGFyZ2luZy4uLlwiXG4gIH1cbiAgZGlzcGxheUNoYXJnaW5nVGV4dChpc0NoYXJnaW5nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VEb25lSW4gPSAoY2g6IG51bWJlciwgZGlzY2g6IG51bWJlcikgPT4ge1xuICBjb25zdCBkb25lSW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvbmVJblwiKSBhcyBIVE1MSGVhZGluZ0VsZW1lbnQ7XG4gIGlmIChjaCAhPT0gSW5maW5pdHkpIHtcbiAgICBkb25lSW4uaW5uZXJUZXh0ID0gYFlvdXIgYmF0dGVyeSB3aWxsIGJlIGZ1bGx5IGNoYXJnZWQgaW4gJHtcbiAgICAgIChjaCAvIDYwKSB8IDBcbiAgICB9IG1pbnNgO1xuICB9IGVsc2UgaWYgKGRpc2NoICE9PSBJbmZpbml0eSkge1xuICAgIGRvbmVJbi5pbm5lclRleHQgPSBgWW91ciBiYXR0ZXJ5IHdpbGwgYmUgZGVhZCBpbiAkeyhkaXNjaCAvIDYwKSB8IDB9IG1pbnNgO1xuICB9IGVsc2Uge1xuICAgIGRvbmVJbi5pbm5lclRleHQgPSBcIlwiO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgQmF0dGVyeVR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgY2hhbmdlTGV2ZWwsXG4gIGNoYW5nZUNoYXJnaW5nQW5pbWF0aW9uLFxuICBjaGFuZ2VEb25lSW4sXG59IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuXG5jb25zdCBuYXZpZ2F0b3JPYmo6IGFueSA9IG5hdmlnYXRvcjtcbmxldCBiYXR0ZXJ5TGV2ZWw6IHN0cmluZywgaXNDaGFyZ2luZzogYm9vbGVhbjtcblxuLy8gTUFJTiBGdW5jdGlvbiBTdGFydFxuYXN5bmMgZnVuY3Rpb24gc2hvd0JhdHRlcnkoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYmF0dGVyeTogQmF0dGVyeVR5cGUgPSBhd2FpdCBuYXZpZ2F0b3JPYmouZ2V0QmF0dGVyeSgpO1xuICAgIGlzQ2hhcmdpbmcgPSBiYXR0ZXJ5LmNoYXJnaW5nO1xuICAgIC8vIENoYW5nZSBMZXZlbFxuICAgIGJhdHRlcnlMZXZlbCA9IGNoYW5nZUxldmVsKGJhdHRlcnkpO1xuICAgIGNoYW5nZUNoYXJnaW5nQW5pbWF0aW9uKGJhdHRlcnkuY2hhcmdpbmcpO1xuICAgIGNoYW5nZURvbmVJbihiYXR0ZXJ5LmNoYXJnaW5nVGltZSwgYmF0dGVyeS5kaXNjaGFyZ2luZ1RpbWUpO1xuICB9IGNhdGNoIChlcnIpIHt9XG59XG4vLyBNQUlOIEZ1bnRpb24gRW5kXG5pZiAoXCJnZXRCYXR0ZXJ5XCIgaW4gbmF2aWdhdG9yKSB7XG4gIHNob3dCYXR0ZXJ5KCk7XG4gIHNldEludGVydmFsKHNob3dCYXR0ZXJ5LCAxMDAwKTtcbn0gZWxzZSB7XG4gIGNvbnN0IHVuc3VwcG9ydGVkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi51bnN1cHBvcnRlZFwiXG4gICkgYXMgSFRNTEhlYWRpbmdFbGVtZW50O1xuICBjb25zdCBzdXBwb3J0ZWREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1cHBvcnRlZFwiKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgdW5zdXBwb3J0ZWREaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgc3VwcG9ydGVkRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///573\n')})();