/*!
 * AriseAlert v1.2.0
 * (c) 2025 Anique Ali
 * MIT License
 */

class AriseAlert {
    constructor() {
        this.overlay = null;
        this.container = null;
        this.currentResolve = null;
        this.autoCloseTimer = null;
        this.progressInterval = null;
        this.timerInterval = null;
        this.globalTheme = 'dark'; // Default theme
        this.colors = {
            default: "#051428",
            success: "#001e0a",
            error: "#280505",
            warning: "#281905",
            border: "#00d4ff",
            text: "#ffffff"
        };
    }

    static fire(e = {}) {
        return (new AriseAlert).show(e);
    }

    static setTheme(theme) {
        var t = new AriseAlert;
        t.globalTheme = theme === 'light' ? 'light' : 'dark';
        AriseAlert.prototype.globalTheme = t.globalTheme;
    }

    static setColors(e) {
        var t = new AriseAlert;
        t.colors = { ...t.colors, ...e };
        AriseAlert.prototype.colors = t.colors;
    }

    static setGlobalTheme(theme) {
        const validThemes = ['dark', 'light'];
        if (validThemes.includes(theme)) {
            AriseAlert.prototype.globalTheme = theme;
            // Apply theme class to document body for global control
            document.body.classList.remove('arise-theme-light', 'arise-theme-dark');
            document.body.classList.add(`arise-theme-${theme}`);
        }
    }

    static getPremiumIcon(e, t = "") {
        var o = {
            sword: '<svg viewBox="0 0 24 24"><path d="M6.92 5L5 6.92l6.5 6.5L8 16.92l1.08 1.08L12 15.08L15.92 19l1.08-1.08L14.08 15L17 12.08L15.08 10.08L12 13.16L5.92 7.08z" fill="#00d4ff"/></svg>',
            shield: '<svg viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,12.6 14.4,13.5 13.5,14.3L12,16L10.5,14.3C9.6,13.5 9.2,12.6 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z" fill="#ffd700"/></svg>',
            crown: '<svg viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm2.7-2h8.6l.9-5.4-2.1 1.7L12 8l-3.1 2.3-2.1-1.7L7.7 14z" fill="#ffd700"/></svg>',
            diamond: '<svg viewBox="0 0 24 24"><path d="M6,2L2,8L12,22L22,8L18,2H6M6.5,4H8.5L7,6.5L6.5,4M10.5,4H13.5L15,8L12,19L9,8L10.5,4M17.5,4L17,6.5L15.5,4H17.5M4.5,8.5L7,7L9,9L4.5,8.5M20,8.5L15,9L17,7L20,8.5Z" fill="#00d4ff"/></svg>',
            magic: '<svg viewBox="0 0 24 24"><path d="M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z" fill="#9c27b0"/></svg>',
            "success-premium": '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#00ff88" opacity="0.2"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#00ff88"/></svg>',
            "info-premium": '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#1e3a8a" opacity="0.3"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#ffffff"/></svg>',
            // "error-premium": '<svg viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="12" r="10" fill="#8B0000" stroke="#FF4444" stroke-width="0.5"/><path d="M15 9l-6 6M9 9l6 6" stroke="#FFD700" stroke-width="2" stroke-linecap="round"/></svg>',
            "error-premium": '<svg viewBox="0 0 24 24" width="48" height="48"><defs><radialGradient id="g" cx="50%" cy="30%"><stop offset="0%" stop-color="#FF4444"/><stop offset="100%" stop-color="#8B0000"/></radialGradient></defs><circle cx="12" cy="12" r="10" fill="url(#g)" stroke="#FFD700" stroke-width="1.5"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#FFD700" stroke-width="2.5" stroke-linecap="round"/><circle cx="18" cy="6" r="1" fill="#FFD700" opacity="0.8"/></svg>',
            "warning-premium": '<svg viewBox="0 0 24 24" width="48" height="48"><path d="M12 2L1 21h22L12 2z" fill="#8B4513" stroke="#FFA500" stroke-width="0.5"/><circle cx="12" cy="16" r="1" fill="#FFD700"/><path d="M12 9v4" stroke="#FFD700" stroke-width="2" stroke-linecap="round"/></svg>',
            "loading-premium": '<svg viewBox="0 0 24 24" class="arisealert-icon-spin"><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" fill="#00d4ff"/></svg>',
            hourglass: '<svg viewBox="0 0 24 24" class="arisealert-icon-pulse"><path d="M6,2V8H6V8L10,12L6,16V16H6V22H18V16H18V16L14,12L18,8V8H18V2H6M16,16.5V20H8V16.5L12,12.5L16,16.5M12,11.5L8,7.5V4H16V7.5L12,11.5Z" fill="#ffa502"/></svg>',
            fire: '<svg viewBox="0 0 24 24" class="arisealert-icon-bounce"><path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2Z" fill="#ff6b35"/></svg>',
            lightning: '<svg viewBox="0 0 24 24" class="arisealert-icon-pulse"><path d="M11,4H13L14.5,6.5H17.5L12.5,13.5L13.5,10.5H10.5L11,4M4.5,20.5V19H19.5V20.5H4.5Z" fill="#ffd700"/></svg>',
            star: '<svg viewBox="0 0 24 24" class="arisealert-icon-bounce"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" fill="#ffd700"/></svg>',
            skull: '<svg viewBox="0 0 24 24"><path d="M12,2A9,9 0 0,0 3,11C3,14.03 4.53,16.82 7,18.47V22H9V19H11V22H13V19H15V22H17V18.46C19.47,16.81 21,14.03 21,11A9,9 0 0,0 12,2M8,11A2,2 0 0,1 10,13A2,2 0 0,1 8,15A2,2 0 0,1 6,13A2,2 0 0,1 8,11M16,11A2,2 0 0,1 18,13A2,2 0 0,1 16,15A2,2 0 0,1 14,13A2,2 0 0,1 16,11M12,14L13.5,17H10.5L12,14Z" fill="#e74c3c"/></svg>',
            heart: '<svg viewBox="0 0 24 24" class="arisealert-icon-pulse"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" fill="#e91e63"/></svg>',
            lock: '<svg viewBox="0 0 24 24"><path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" fill="#795548"/></svg>',
            gear: '<svg viewBox="0 0 24 24" class="arisealert-icon-spin"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" fill="#607d8b"/></svg>'
        };
        return `<div class="arisealert-premium-icon ${t}">${o[e] || o["info-premium"]}</div>`;
    }

    renderIcon(e) {
        return "string" == typeof e && e.includes("-premium") ||
            ["sword", "shield", "crown", "diamond", "fire", "lightning", "star", "hourglass", "magic", "skull", "heart", "lock", "gear"].includes(e) ?
            AriseAlert.getPremiumIcon(e) : e;
    }

    static toast(e = {}) {
        let t = document.createElement("div");
        t.className = "arisealert-toast";
        var o = e.position || "top-right";
        switch (t.style.position = "fixed", o) {
            case "top-left": t.style.top = "20px", t.style.left = "20px"; break;
            case "top-right": t.style.top = "20px", t.style.right = "20px"; break;
            case "bottom-left": t.style.bottom = "20px", t.style.left = "20px"; break;
            case "bottom-right": t.style.bottom = "20px", t.style.right = "20px";
        }
        t.innerHTML = `
          <div class="arisealert-panel" style="padding: 20px; min-width: 300px;">
            <div class="arisealert-icon">
              <div class="icon" style="font-size: 24px;">${e.icon || "🍞"}</div>
            </div>
            <div class="arisealert-title" style="font-size: 16px; margin-bottom: 8px;">${e.title}</div>
            <div class="arisealert-message" style="font-size: 14px;">${e.message}</div>
          </div>
        `;
        document.body.appendChild(t);
        setTimeout(() => t.classList.add("show"), 100);
        setTimeout(() => {
            t.classList.remove("show");
            setTimeout(() => { t.parentNode && document.body.removeChild(t) }, 300);
        }, e.timer || 3000);
        return Promise.resolve({ confirmed: true });
    }


    show(t) {
        return new Promise(e => {
            this.currentResolve = e;
            this.create(t);
        });
    }

    create(e) {
        e = {
            title: e.title || "NOTIFICATION",
            message: e.message || "",
            icon: e.icon || "info-premium",
            type: e.type || "default",
            showButtons: !1 !== e.showButtons,
            showCancelButton: e.showCancelButton || !1,
            confirmButtonText: e.confirmButtonText || "Accept",
            cancelButtonText: e.cancelButtonText || "Cancel",
            timer: e.timer || null,
            customBg: e.customBg || null,
            input: e.input || null,
            inputOptions: e.options || {},
            placeholder: e.placeholder || "",
            validator: e.validator || null,
            image: e.image || null,
            progress: e.progress || !1,
            showTimer: e.showTimer || !1,
            timerDuration: e.timerDuration || 10,
            theme: e.theme || this.globalTheme
        };

        this.createOverlay();
        this.createContainer();
        this.createPanel(e);
        document.body.appendChild(this.overlay);
        requestAnimationFrame(() => {
            this.overlay.classList.add("show");
            this.container.classList.add("show");
            // Apply theme class
            if (e.theme === 'light') {
                this.container.classList.add('arise-theme-light');
            }
        });
        !e.timer || e.progress || e.showTimer || (this.autoCloseTimer = setTimeout(() => {
            this.close({ confirmed: !1, timedOut: !0 });
        }, e.timer));
        e.progress && this.startProgress(e.timer || 3000);
        e.showTimer && this.startTimer(e.timerDuration);
    }

    createOverlay() {
        this.overlay = document.createElement("div");
        this.overlay.className = "arisealert-overlay";
        this.overlay.addEventListener("click", e => {
            e.target === this.overlay && this.close({ confirmed: !1 });
        });
    }

    createContainer() {
        this.container = document.createElement("div");
        this.container.className = "arisealert-container";
        this.overlay.appendChild(this.container);
    }

    setupKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && this.container) {
                const confirmBtn = this.container.querySelector('.arisealert-btn:not(.cancel)');
                if (confirmBtn) {
                    confirmBtn.click();
                    e.preventDefault(); // Prevent default form submission behavior
                    e.stopPropagation(); // Stop event bubbling
                }
            } else if (e.key === 'Escape' && this.container) {
                const cancelBtn = this.container.querySelector('.arisealert-btn.cancel');
                if (cancelBtn) {
                    cancelBtn.click();
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        });
    }

    createPanel(e) {
        var t, o = document.createElement("div");
        o.className = "arisealert-panel arisealert-" + e.type;
        e.customBg ? o.style.background = e.customBg :
            (t = this.colors[e.type] || this.colors.default, o.style.background = t);

        let r = "", i = "", s = "", n = "", l = "";
        e.input && (r = this.createInputHtml(e));
        e.image && (i = `<img src="${e.image}" class="arisealert-image" alt="Alert Image">`);
        e.progress && (s = `
            <div class="arisealert-progress">
              <div class="arisealert-progress-bar" id="arisealert-progress-bar"></div>
            </div>
        `);
        e.showTimer && (n = `<div class="arisealert-timer" id="arisealert-timer">${e.timerDuration}</div>`);
        "loading" === e.icon && (l = '<div class="arisealert-spinner"></div>');

        o.innerHTML = `
            <div class="arisealert-corners">
              <div class="arisealert-corner top-left"></div>
              <div class="arisealert-corner top-right"></div>
              <div class="arisealert-corner bottom-left"></div>
              <div class="arisealert-corner bottom-right"></div>
            </div>
    
            <div class="arisealert-line top"></div>
            <div class="arisealert-line bottom"></div>
    
            ${"loading" !== e.icon ? `
              <div class="arisealert-icon">
                <div class="icon">${this.renderIcon(e.icon)}</div>
              </div>
            ` : l}
    
            <div class="arisealert-title">${e.title}</div>
            <div class="arisealert-message">${e.message}</div>
            ${i}
            ${s}
            ${n}
            ${r}
            ${e.showButtons ? this.createButtons(e) : ""}
        `;

        this.container.appendChild(o);

        if (e.showButtons) {
            this.setupButtonEvents(o, e);
        }

        // Add keyboard event support
        this.setupKeyboardEvents();
    }


    createInputHtml(t) {
        switch (t.input) {
            case "text":
            case "email":
            case "password":
                return `<input type="${t.input}" class="arisealert-input" placeholder="${t.placeholder}" id="arisealert-input">`;
            case "textarea":
                return `<textarea class="arisealert-input" placeholder="${t.placeholder}" id="arisealert-input" rows="4"></textarea>`;
            case "select":
                let e = "";
                for (var [o, r] of Object.entries(t.inputOptions)) e += `<option value="${o}">${r}</option>`;
                return `
            <select class="arisealert-select" id="arisealert-input">
              <option value="">Choose an option...</option>
              ${e}
            </select>
          `;
            case "number":
                return `<input type="number" class="arisealert-input" placeholder="${t.placeholder}" id="arisealert-input">`;
            case "range":
                return `
            <input type="range" class="arisealert-input" id="arisealert-input" min="0" max="100" value="50">
            <div style="text-align: center; color: var(--arise-primary); margin-top: 10px;">
              Value: <span id="range-value">50</span>
            </div>
          `;
            default: return "";
        }
    }

    startProgress(duration) {
        const progressBar = document.getElementById('arisealert-progress-bar');
        if (!progressBar) return;

        let progress = 0;
        const increment = 100 / (duration / 50); // Update every 50ms

        this.progressInterval = setInterval(() => {
            progress += increment;
            progressBar.style.width = Math.min(progress, 100) + '%';

            if (progress >= 100) {
                clearInterval(this.progressInterval);
                setTimeout(() => {
                    this.close({ confirmed: true, completed: true });
                }, 500);
            }
        }, 50);
    }

    startTimer(t) {
        let o = document.getElementById("arisealert-timer");
        if (o) {
            let e = t;
            this.timerInterval = setInterval(() => {
                e--;
                (o.textContent = e) <= 0 && (clearInterval(this.timerInterval), this.close({ confirmed: !1, timedOut: !0 }))
            }, 1000)
        }
    }

    setupButtonEvents(t, e) {
        var o = t.querySelector(".arisealert-btn:not(.cancel)"),
            r = t.querySelector(".arisealert-btn.cancel");
        o && o.addEventListener("click", () => { this.handleConfirm(e) });
        r && r.addEventListener("click", () => { this.close({ confirmed: !1, dismissed: !0 }) });

        let i = t.querySelector('input[type="range"]');
        if (i) {
            let e = t.querySelector("#range-value");
            i.addEventListener("input", () => { e.textContent = i.value });
        }
    }

    handleConfirm(e) {
        if (e.input) {
            var t = document.getElementById("arisealert-input"), t = t ? t.value : "";
            if (e.validator) {
                e = e.validator(t);
                if (e) return void this.showValidationError(e);
            }
            this.close({ confirmed: !0, value: t });
        } else {
            this.close({ confirmed: !0, value: !0 });
        }
    }

    showValidationError(e) {
        var t = document.querySelector(".arisealert-validation-error"),
            t = (t && t.remove(), document.createElement("div")),
            e = (t.className = "arisealert-validation-error", t.style.cssText = `
            color: var(--arise-error);
            font-size: 12px;
            margin-top: 10px;
            text-align: center;
            animation: shake 0.5s ease-in-out;
          `, t.textContent = e, document.getElementById("arisealert-input"));
        e && (e.style.borderColor = "var(--arise-error)", e.parentNode.insertBefore(t, e.nextSibling));
    }

    createButtons(e) {
        let t = '<div class="arisealert-actions">';
        e.showCancelButton && (t += `<button class="arisealert-btn cancel">${e.cancelButtonText}</button>`);
        t = t + `<button class="arisealert-btn">${e.confirmButtonText}</button>` + "</div>";
        return t;
    }

    close(e) {
        document.removeEventListener('keydown', this.keyboardHandler);
        this.autoCloseTimer && clearTimeout(this.autoCloseTimer);
        this.progressInterval && clearInterval(this.progressInterval);
        this.timerInterval && clearInterval(this.timerInterval);
        this.overlay.classList.remove("show");
        this.container.classList.remove("show");
        setTimeout(() => {
            this.overlay && this.overlay.parentNode && document.body.removeChild(this.overlay);
            this.currentResolve && this.currentResolve(e);
        }, 300);
    }

    static success(e, t) {
        return this.fire({ title: e, message: t, icon: "success-premium", type: "success" });
    }

    static error(e, t) {
        return this.fire({ title: e, message: t, icon: "error-premium", type: "error" });
    }

    static warning(e, t) {
        return this.fire({ title: e, message: t, icon: "warning-premium", type: "warning" });
    }

    static info(e, t) {
        return this.fire({ title: e, message: t, icon: "info-premium", type: "info" });
    }

    static jobChange(e = {}) {
        return this.fire({ ...e, icon: "crown", type: "success", showButtons: !1, timer: e.timer || 4000 });
    }

    static input(e = {}) {
        return this.fire({
            title: e.title || "ENTER YOUR NAME",
            message: e.message || "Please enter your Hunter name:",
            icon: "magic",
            input: "text",
            placeholder: e.placeholder || "Hunter Name...",
            showCancelButton: !0,
            confirmButtonText: e.confirmButtonText || "Submit",
            validator: e.validator
        });
    }

    static select(e = {}) {
        return this.fire({
            title: e.title || "CHOOSE YOUR CLASS",
            message: e.message || "Select your Hunter class:",
            icon: "crown",
            input: "select",
            options: e.options || {},
            showCancelButton: !0,
            confirmButtonText: e.confirmButtonText || "Select"
        });
    }

    static loading(e = {}) {
        return this.fire({
            title: e.title || "LOADING...",
            message: e.message || "Connecting to Shadow Realm...",
            icon: "loading-premium",
            showButtons: !1,
            timer: e.timer || 3000
        });
    }

    static progress(e = {}) {
        return this.fire({
            title: e.title || "LEVELING UP...",
            message: e.message || "Experience Points Loading...",
            icon: "diamond",
            showButtons: !1,
            progress: !0,
            timer: e.timer || 3000
        });
    }

    static timer(e = {}) {
        return this.fire({
            title: e.title || "DUNGEON CLOSING",
            message: e.message || "Time remaining...",
            icon: "hourglass",
            showButtons: !1,
            showTimer: !0,
            timerDuration: e.timerDuration || 10
        });
    }

    static image(e = {}) {
        return this.fire({
            title: e.title || "RARE ITEM ACQUIRED!",
            message: e.message || "You found a legendary weapon!",
            icon: e.icon || "star",
            image: e.image,
            showCancelButton: e.showCancelButton || !0,
            confirmButtonText: e.confirmButtonText || "OK"
        });
    }

    static textarea(e = {}) {
        return this.fire({
            title: e.title || "MISSION REPORT",
            message: e.message || "Please provide a detailed mission report:",
            icon: "magic",
            input: "textarea",
            placeholder: e.placeholder || "Enter your detailed report here...",
            showCancelButton: !0,
            confirmButtonText: e.confirmButtonText || "Submit Report",
            validator: e.validator
        });
    }

    static password(e = {}) {
        return this.fire({
            title: e.title || "SECURE ACCESS",
            message: e.message || "Enter your Hunter ID password:",
            icon: "lock",
            input: "password",
            placeholder: e.placeholder || "Enter password...",
            showCancelButton: !0,
            confirmButtonText: e.confirmButtonText || "Authenticate",
            validator: e.validator
        });
    }

    static number(e = {}) {
        return this.fire({
            title: e.title || "ENTER NUMBER",
            message: e.message || "Please enter a number:",
            icon: "diamond",
            input: "number",
            placeholder: e.placeholder || "0",
            showCancelButton: !0,
            confirmButtonText: e.confirmButtonText || "Submit",
            validator: e.validator
        });
    }

    static range(e = {}) {
        return this.fire({
            title: e.title || "SELECT RANGE",
            message: e.message || "Choose a value:",
            icon: "lightning",
            input: "range",
            showCancelButton: !0,
            confirmButtonText: e.confirmButtonText || "Select"
        });
    }

    static confirm(e = {}) {
        return this.fire({
            title: e.title || "ENTER DUNGEON?",
            message: e.message || "This is a high-risk S-Rank dungeon",
            icon: e.icon || "shield",
            showCancelButton: !0,
            confirmButtonText: e.confirmButtonText || "Enter",
            cancelButtonText: e.cancelButtonText || "Retreat"
        });
    }

    static customIcon(e = {}) {
        return this.fire({
            title: e.title || "SHADOW MONARCH",
            message: e.message || "The power of shadows flows through you",
            icon: e.icon || "crown",
            customBg: e.customBg || "#1a0033",
            confirmButtonText: e.confirmButtonText || "Rise",
            timer: e.timer || 5000
        });
    }

    static html(e = {}) {
        return this.fire({
            title: e.title || "RICH CONTENT",
            message: e.message || "HTML content goes here",
            icon: e.icon || "gear",
            confirmButtonText: e.confirmButtonText || "Awesome!"
        });
    }

    static email(e = {}) {
        return this.fire({
            title: e.title || "ENTER EMAIL",
            message: e.message || "Please enter your email address:",
            icon: "magic",
            input: "email",
            placeholder: e.placeholder || "your@email.com",
            showCancelButton: !0,
            confirmButtonText: e.confirmButtonText || "Submit",
            validator: e.validator
        });
    }
}

window.AriseAlert = AriseAlert;