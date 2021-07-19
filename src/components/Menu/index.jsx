import React from "react";
import Box from "@material-ui/core/Box";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import useStyle from "./style";
import img from "./../../assets/img/icono.png";
/**
 * @function
 * @name Menu
 * @description Es el nav de color gris, se crea por defecto la maquetación del menú y se recorre con el array llamado menú
 * para que por defecto acomode toda la información del nav.
 * @returns
 */
const Menu = () => {
  const classes = useStyle();
  const menu = [
    {
      nombre: "DASHBOARD",
      icono: <VisibilityIcon className={classes.icono} />,
      url: "#",
    },
    {
      nombre: "PORTAFOLIO",
      icono: <ApartmentOutlinedIcon className={classes.icono} />,
      url: "#",
    },
  ];
  return (
    <Box className={classes.root}>
      <Box>
        <img src={img} className={classes.img} alt="Logo de happie" />
      </Box>
      <Box width="1350px" display="flex" justifyContent="center">
        <nav>
          <ul className={classes.order}>
            {menu.map((item) => {
              return (
                <li className={classes.menu} key={item.nombre}>
                  <a href={item.href} className={classes.link}>
                    {item.icono} {item.nombre}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Box>
      <Box>
        <LocalMallOutlinedIcon className={classes.iconoBolsa} />
        <p className={classes.contoador}>0</p>
      </Box>
    </Box>
  );
};

export default Menu;
