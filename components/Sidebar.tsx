import { Book } from "@/public/icons/Book";
import { Briefcase } from "@/public/icons/Briefcase";
import { EnvelopeOpen } from "@/public/icons/EnvelopeOpen";
import { Key } from "@/public/icons/Key";
import { LifeRing } from "@/public/icons/LifeRing";
import { Logo } from "@/public/icons/Logo";
import { RocketLaunch } from "@/public/icons/RocketLaunch";
import { Shield } from "@/public/icons/Shield";
import { Sliders } from "@/public/icons/Sliders";
import { Users } from "@/public/icons/Users";
import { Button, Overlay, Sidebar, SidebarState, useSidebar } from "@rewind-ui/core";
import { useState } from "react";



function SideBar() {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();

  return (
    // <div className="relative flex flex-row w-full h-full min-h-[35rem]">
    <div>
      <Sidebar color="dark"
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
        // className="absolute"
      >
        <Sidebar.Head>
          <Sidebar.Head.Logo>
            <RocketLaunch />
          </Sidebar.Head.Logo>
          <Sidebar.Head.Title>Glitz Bd</Sidebar.Head.Title>
          <Sidebar.Head.Toggle />
        </Sidebar.Head>

        <Sidebar.Nav>
          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Item icon={<RocketLaunch />} label="Dashboard" href="#" active />
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Management</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item icon={<Briefcase />} label="Update Products" href="#" />
            <Sidebar.Nav.Section.Item icon={<Users />} label="Users" as="button">
              <Sidebar.Nav.Section isChild>
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="List all"
                  href="#"
                />
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Add new"
                  href="#"
                />
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Archived"
                  href="#"
                />
              </Sidebar.Nav.Section>
            </Sidebar.Nav.Section.Item>
            <Sidebar.Nav.Section.Item icon={<Shield />} label="Roles" href="#" />
            <Sidebar.Nav.Section.Item icon={<Key />} label="Permissions" href="#" />
            <Sidebar.Nav.Section.Item icon={<Sliders />} label="Settings" href="#" />
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Support</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item icon={<LifeRing />} label="Contact" href="#" />
            <Sidebar.Nav.Section.Item icon={<EnvelopeOpen />} label="Tickets" href="#" />
            <Sidebar.Separator />
            <Sidebar.Nav.Section.Item icon={<Book />} label="Documentation" href="#" />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>

        {/* <Sidebar.Footer>
          <div className="flex flex-col justify-center items-center text-sm">
            <span className="font-semibold">Glitz Bd</span>
            <span>version 0.1</span>
          </div>
        </Sidebar.Footer> */}
      </Sidebar>

      <main
        className={`transition-all transform duration-100 text-slate-700 flex w-full flex-col items-center ${
          expanded ? 'md:ml-64' : 'md:ml-20'
        }`}
      >
        {mobile && (
          <Overlay
            blur="none"
            onClick={() => {
              sidebar.toggleMobile();
            }}
            className="md:hidden z-40"
          />
        )}
         
          <Button
            onClick={() => {
              sidebar.toggleMobile();
            }}
            size="sm"
            color="white"
            icon
            className="ml-auto flex md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M448 96c0-17.7-14.3-32-32-32H32C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" />
              <path
                className="opacity-50"
                d="M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
              />
            </svg>
          </Button>
       

   
      </main>
    </div>
  );
}

export default SideBar;