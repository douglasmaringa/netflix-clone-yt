'use client'
import React from "react";
import {Navbar,NavbarMenuToggle,NavbarMenu,NavbarMenuItem, NavbarContent, NavbarItem, Link,Dropdown,DropdownTrigger,Avatar} from "@nextui-org/react";
import Image from "next/image"


function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Movies",
    "Latest Movies",
    "My List",
  ];

  return (
    <div className="flex bg-gradient-to-r from-black  to-transparent">

        {/*logo*/}
       <div className="flex items-center w-3/12 md:w-2/12">
          <Image src="logo-dark.svg" width={60} height={60} />
          <h1 className="text-white font-semibold text-lg lg:text-xl xl:text-3xl">Seffa Flix</h1>
        </div>

     <Navbar className="w-9/12 md:w-10/12 bg-transparent" onMenuOpenChange={setIsMenuOpen}>
    
    {/*burger menu*/}
      <NavbarContent className="block md:hidden text-white" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

     {/*web links*/}
     <NavbarContent className="hidden md:flex gap-10" justify="center">
       <NavbarItem isActive>
         <Link className="text-white" color="foreground" href="#">
           Movies
         </Link>
       </NavbarItem>
       <NavbarItem>
         <Link className="text-white" color="foreground" href="#">
           Latest Movies
         </Link>
       </NavbarItem>
      
       <NavbarItem>
         <Link className="text-white" color="foreground" href="#">
           Watch List
         </Link>
       </NavbarItem>
     </NavbarContent>


        {/*mobile links*/}
     <NavbarMenu className="bg-gray-800">
       {menuItems.map((item, index) => (
         <NavbarMenuItem key={`${item}-${index}`}>
           <Link
             color={
               index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
             }
             className="w-full text-white"
             href="#"
             size="lg"
           >
             {item}
           </Link>
         </NavbarMenuItem>
       ))}
     </NavbarMenu>

        {/*profile*/}
     <NavbarContent  as="div" justify="end">
        <Dropdown className="ml-auto bg-black" placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
        </Dropdown>
      </NavbarContent>

   </Navbar>
   </div>
  )
}

export default Header