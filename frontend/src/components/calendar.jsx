import React from "react";
import "../css/mc-calendar.min.css";
const Calendar = () => {
    return (
        <div>
            <div
                class="mc-calendar mc-calendar--inline mc-calendar--opened"
                tabindex="0"
                style="--mc-theme-color:#38ada9; --mc-main-bg:#f5f5f6; --mc-active-text-color:rgb(0, 0, 0); --mc-inactive-text-color:rgba(0, 0, 0, 0.2); --mc-display-foreground:rgba(255, 255, 255, 0.8); --mc-display-background:#38ada9; --mc-picker-foreground:rgb(0, 0, 0); --mc-picker-background:#f5f5f6; --mc-picker-header-active:#818181; --mc-picker-header-inactive:rgba(0, 0, 0, 0.2); --mc-weekday-foreground:#38ada9; --mc-btn-success-foreground:#38ada9; --mc-btn-danger-foreground:#e65151; --mc-date-active-def-foreground:rgb(0, 0, 0); --mc-date-active-pick-foreground:#ffffff; --mc-date-active-pick-background:#38ada9; --mc-date-active-today-foreground:rgb(0, 0, 0); --mc-date-active-today-background:rgba(0, 0, 0, 0.2); --mc-date-inactive-def-foreground:rgba(0, 0, 0, 0.2); --mc-date-inactive-pick-foreground:#38ada9; --mc-date-inactive-pick-background:#38ada9; --mc-date-inactive-today-foreground:rgba(0, 0, 0, 0.2); --mc-date-inactive-today-background:rgba(0, 0, 0, 0.2); --mc-date-marcked-foreground:#38ada9; --mc-prev-active-def-foreground:rgb(0, 0, 0); --mc-prev-active-pick-foreground:rgb(0, 0, 0); --mc-prev-active-pick-background:rgba(0, 0, 0,0.2); --mc-prev-inactive-def-foreground:rgba(0, 0, 0, 0.2); --mc-prev-inactive-pick-foreground:rgba(0, 0, 0, 0.2); --mc-prev-inactive-pick-background:rgba(0, 0, 0, 0.2); top: 222px; left: 448px;"
            >
                <div class="mc-display" data-target="calendar">
                    <div class="mc-display__header">
                        <h3 class="mc-display__day">Pe</h3>
                    </div>
                    <div class="mc-display__body">
                        <div class="mc-display__data mc-display__data--primary">
                            <h1 class="mc-display__date">9</h1>
                        </div>
                        <div class="mc-display__data mc-display__data--secondary">
                            <h3 class="mc-display__month">Fewral</h3>
                            <h2 class="mc-display__year">2023</h2>
                        </div>
                    </div>
                </div>
                <div class="mc-picker">
                    <div
                        class="mc-picker__header mc-select mc-container"
                        data-target="calendar"
                    >
                        <div class="mc-select__month">
                            <button
                                id="mc-picker__month--prev"
                                class="mc-select__nav mc-select__nav--prev"
                                tabindex="0"
                                aria-label="Previous Month"
                            >
                                <svg
                                    class="icon-angle icon-angle--left"
                                    viewBox="0 0 256 512"
                                    width="10px"
                                    height="100%"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id="mc-current--month"
                                class="mc-select__data mc-select__data--month"
                                tabindex="0"
                                aria-label="Click to select month"
                                aria-haspopup="true"
                                aria-expanded="false"
                                aria-controls="mc-month-year__preview"
                            >
                                <span>Fewral</span>
                            </div>
                            <button
                                id="mc-picker__month--next"
                                class="mc-select__nav mc-select__nav--next"
                                tabindex="0"
                                aria-label="Next Month"
                            >
                                <svg
                                    class="icon-angle icon-angle--right"
                                    viewBox="0 0 256 512"
                                    width="10px"
                                    height="100%"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div class="mc-select__year">
                            <button
                                id="mc-picker__year--prev"
                                class="mc-select__nav mc-select__nav--prev"
                            >
                                <svg
                                    class="icon-angle icon-angle--left"
                                    viewBox="0 0 256 512"
                                    width="10px"
                                    height="100%"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id="mc-current--year"
                                class="mc-select__data mc-select__data--year"
                                tabindex="0"
                                aria-label="Click to select year"
                                aria-haspopup="true"
                                aria-expanded="false"
                                aria-controls="mc-month-year__preview"
                            >
                                <span>2023</span>
                            </div>
                            <button
                                id="mc-picker__year--next"
                                class="mc-select__nav mc-select__nav--next"
                            >
                                <svg
                                    class="icon-angle icon-angle--right"
                                    viewBox="0 0 256 512"
                                    width="10px"
                                    height="100%"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div
                            id="mc-picker__month-year"
                            class="mc-picker-vhidden"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            Fewral 2023
                        </div>
                    </div>
                    <div class="mc-picker__body">
                        <table
                            class="mc-table mc-container"
                            aria-labelledby="mc-picker__month-year"
                        >
                            <thead class="mc-table__header">
                                <tr>
                                    <th
                                        class="mc-table__weekday"
                                        aria-label="Ýe"
                                    >
                                        Ýe
                                    </th>
                                    <th
                                        class="mc-table__weekday"
                                        aria-label="Du"
                                    >
                                        Du
                                    </th>
                                    <th
                                        class="mc-table__weekday"
                                        aria-label="Si"
                                    >
                                        Si
                                    </th>
                                    <th
                                        class="mc-table__weekday"
                                        aria-label="Ça"
                                    >
                                        Ça
                                    </th>
                                    <th
                                        class="mc-table__weekday"
                                        aria-label="Pe"
                                    >
                                        Pe
                                    </th>
                                    <th
                                        class="mc-table__weekday"
                                        aria-label="An"
                                    >
                                        An
                                    </th>
                                    <th
                                        class="mc-table__weekday"
                                        aria-label="Şe"
                                    >
                                        Şe
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="mc-table__body">
                                <tr class="mc-table__week">
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Sun Jan 29 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Sun Jan 29 2023"
                                    >
                                        29
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Mon Jan 30 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Mon Jan 30 2023"
                                    >
                                        30
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Tue Jan 31 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Tue Jan 31 2023"
                                    >
                                        31
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Wed Feb 01 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Wed Feb 01 2023"
                                    >
                                        1
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Thu Feb 02 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Thu Feb 02 2023"
                                    >
                                        2
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Fri Feb 03 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Fri Feb 03 2023"
                                    >
                                        3
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Sat Feb 04 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Sat Feb 04 2023"
                                    >
                                        4
                                    </td>
                                </tr>
                                <tr class="mc-table__week">
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Sun Feb 05 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Sun Feb 05 2023"
                                    >
                                        5
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Mon Feb 06 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Mon Feb 06 2023"
                                    >
                                        6
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Tue Feb 07 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Tue Feb 07 2023"
                                    >
                                        7
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Wed Feb 08 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Wed Feb 08 2023"
                                    >
                                        8
                                    </td>
                                    <td
                                        class="mc-date mc-date--active mc-date--today"
                                        data-val-date="Thu Feb 09 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Today: Thu Feb 09 2023"
                                    >
                                        9
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Fri Feb 10 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Fri Feb 10 2023"
                                    >
                                        10
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Sat Feb 11 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Sat Feb 11 2023"
                                    >
                                        11
                                    </td>
                                </tr>
                                <tr class="mc-table__week">
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Sun Feb 12 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Sun Feb 12 2023"
                                    >
                                        12
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Mon Feb 13 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Mon Feb 13 2023"
                                    >
                                        13
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Tue Feb 14 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Tue Feb 14 2023"
                                    >
                                        14
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Wed Feb 15 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Wed Feb 15 2023"
                                    >
                                        15
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Thu Feb 16 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Thu Feb 16 2023"
                                    >
                                        16
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Fri Feb 17 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Fri Feb 17 2023"
                                    >
                                        17
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Sat Feb 18 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Sat Feb 18 2023"
                                    >
                                        18
                                    </td>
                                </tr>
                                <tr class="mc-table__week">
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Sun Feb 19 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Sun Feb 19 2023"
                                    >
                                        19
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Mon Feb 20 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Mon Feb 20 2023"
                                    >
                                        20
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Tue Feb 21 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Tue Feb 21 2023"
                                    >
                                        21
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Wed Feb 22 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Wed Feb 22 2023"
                                    >
                                        22
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Thu Feb 23 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Thu Feb 23 2023"
                                    >
                                        23
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Fri Feb 24 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Fri Feb 24 2023"
                                    >
                                        24
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Sat Feb 25 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Sat Feb 25 2023"
                                    >
                                        25
                                    </td>
                                </tr>
                                <tr class="mc-table__week">
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Sun Feb 26 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Sun Feb 26 2023"
                                    >
                                        26
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Mon Feb 27 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Mon Feb 27 2023"
                                    >
                                        27
                                    </td>
                                    <td
                                        class="mc-date mc-date--active"
                                        data-val-date="Tue Feb 28 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="0"
                                        aria-label="Tue Feb 28 2023"
                                    >
                                        28
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Wed Mar 01 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Wed Mar 01 2023"
                                    >
                                        1
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Thu Mar 02 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Thu Mar 02 2023"
                                    >
                                        2
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Fri Mar 03 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Fri Mar 03 2023"
                                    >
                                        3
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Sat Mar 04 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Sat Mar 04 2023"
                                    >
                                        4
                                    </td>
                                </tr>
                                <tr class="mc-table__week">
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Sun Mar 05 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Sun Mar 05 2023"
                                    >
                                        5
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Mon Mar 06 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Mon Mar 06 2023"
                                    >
                                        6
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Tue Mar 07 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Tue Mar 07 2023"
                                    >
                                        7
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Wed Mar 08 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Wed Mar 08 2023"
                                    >
                                        8
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Thu Mar 09 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Thu Mar 09 2023"
                                    >
                                        9
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Fri Mar 10 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Fri Mar 10 2023"
                                    >
                                        10
                                    </td>
                                    <td
                                        class="mc-date mc-date--inactive"
                                        data-val-date="Sat Mar 11 2023 00:00:00 GMT+0500 (Turkmenistan Standard Time)"
                                        tabindex="-1"
                                        aria-label="Sat Mar 11 2023"
                                    >
                                        11
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div
                            id="mc-month-year__preview"
                            class="mc-month-year__preview"
                            data-target="null"
                            role="menu"
                        >
                            <div class="mc-month-year__cell"></div>
                            <div class="mc-month-year__cell"></div>
                            <div class="mc-month-year__cell"></div>
                            <div class="mc-month-year__cell"></div>
                            <div class="mc-month-year__cell"></div>
                            <div class="mc-month-year__cell"></div>
                            <div class="mc-month-year__cell"></div>
                            <div class="mc-month-year__cell"></div>
                            <div class="mc-month-year__cell"></div>
                            <div class="mc-month-year__cell"></div>
                            <div class="mc-month-year__cell"></div>
                            <div class="mc-month-year__cell"></div>
                        </div>
                    </div>
                    <div class="mc-picker__footer mc-container">
                        <div class="mc-footer__section mc-footer__section--primary">
                            <button
                                id="mc-btn__clear"
                                class="mc-btn mc-btn--danger"
                                tabindex="0"
                            ></button>
                        </div>
                        <div class="mc-footer__section mc-footer__section--secondary">
                            <button
                                id="mc-btn__cancel"
                                class="mc-btn mc-btn--success"
                                tabindex="0"
                            >
                                Goýbolsun et
                            </button>
                            <button
                                id="mc-btn__ok"
                                class="mc-btn mc-btn--success"
                                tabindex="0"
                            >
                                Saýla
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Calendar);
