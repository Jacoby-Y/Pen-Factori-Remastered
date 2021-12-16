const tip_box = $("#tip-box");
const set_tip = (str, sect)=>{
    let color = "";
    let left = "0";
    if (sect == "ink") {
        color = "maroon";
    } else if (sect == "mat") {
        color = "green";
        left = "33.3%";
    } else if (sect == "pen") {
        color = "#333333";
        left = "66.6%";
    }
    const st = tip_box.style;
    st.backgroundColor = color;
    st.left = left;
    setTimeout(() => {
        st.transitionDuration = "0.3s";
        st.transform = "translateY(0)";
    }, 10);
    D.tool_tip = str;
}
const hide_tip = ()=>{
    // D.tool_tip = "";
    const st = tip_box.style;
    tip_box.style.transform = "translateY(100%)";
    setTimeout(() => {
        st.transitionDuration = "0s";
    }, 10);
}