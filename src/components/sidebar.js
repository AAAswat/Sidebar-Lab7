import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

function MySidebar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' , color: 'black'}}>
      <Sidebar>
        <Menu>
          <MenuItem> Home</MenuItem>
          <MenuItem> Information</MenuItem>
          <MenuItem> Contact</MenuItem>
        </Menu>
      </Sidebar>;
      <main>
       {<button onClick={() => collapseSidebar()}>Collapse</button>}
      </main>
    </div>
  );
}

export default MySidebar;