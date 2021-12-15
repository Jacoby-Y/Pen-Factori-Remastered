const tip_box = $("#tip-box");
const set_tip = (str, sect)=>{
    let color = "";
    let left = "0";
    if (sect == "ink") {
        color = "red";
    } else if (sect == "mat") {
        color = "green";
        left = "33.3%";
    } else if (sect == "pen") {
        color = "grey";
        left = "66.6%";
    }
    const st = tip_box.style;
    st.borderColor = color;
    st.left = left;
    setTimeout(() => {
        st.transitionDuration = "0.3s";
        st.transform = "translateY(0)";
    }, 10);
    D.tool_tip = str;
}
const hide_tip = ()=>{
    // D.tool_tip = "";
    tip_box.style.transform = "translateY(100%)";
    st.transitionDuration = "0s";
}