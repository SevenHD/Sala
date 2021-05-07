import React from "react";
import { Nav, SidebarNav, SidebarWrap } from "./StyledComp";
import SubMenu from "./SubMenu";
import { SideNavData } from "./SideNavData";
import { IconContext } from "react-icons/lib";

export default function SideNav(props) {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <SidebarNav>
            <SidebarWrap>
              {SideNavData.map((item, index) => (
                <SubMenu
                  item={item}
                  key={index}
                  location={props.location.pathname}
                />
              ))}
            </SidebarWrap>
          </SidebarNav>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

// export default function SideNav(props) {
//   const { state, dispatch } = useContext(myContext);
//   return (
//     <>
//       <ul className="side_nav">
//         <li>
//           <span
//             style={
//               props.location.pathname === "/view"
//                 ? { backgroundColor: "#539629" }
//                 : {}
//             }
//             onClick={() => {
//               dispatch({ type: "MODEL_CHANGE", model: "def" });
//               props.history.push("/view");
//             }}
//           >
//             View List
//           </span>
//         </li>
//         <li>
//           <span
//             style={
//               props.location.pathname === "/add"
//                 ? { backgroundColor: "#539629" }
//                 : {}
//             }
//             onClick={() => props.history.push("/add")}
//           >
//             Add
//           </span>
//         </li>
//         <li>
//           <span
//             style={
//               props.location.pathname === "/modify"
//                 ? { backgroundColor: "#539629" }
//                 : {}
//             }
//             onClick={() => dispatch({ type: "MODEL_CHANGE", model: "modify" })}
//           >
//             Modify
//           </span>
//         </li>
//         <li>
//           <span
//             style={
//               props.location.pathname === "/delete"
//                 ? { backgroundColor: "#539629" }
//                 : {}
//             }
//             onClick={() => dispatch({ type: "MODEL_CHANGE", model: "delete" })}
//           >
//             Delete
//           </span>
//         </li>
//       </ul>
//     </>
//   );
// }
