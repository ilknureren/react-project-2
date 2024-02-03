import logo from '../logo.svg';

export default function NavBar(){
    return (
        <>
           <header className="App-header bg-light text-dark">
             <img src={logo} className="App-logo" alt="logo" />
             <p className="intro mt-2">
               Peter Dommermuth <code class="text-dark">&#8212;</code> Comic Artist
             </p>
             <ul className="App-navbar nav nav-pills ms-5 p-0">
              <CustomLink href="/">Home</CustomLink>
              <CustomLink href="/about">About Me</CustomLink>
              <CustomLink href="/contact">Contact</CustomLink>
             </ul>
           </header>
        </>
    )
}

function CustomLink({ href, children, ...props }){
  const path = window.location.pathname

  return (
    <li className={path === href ? "nav-link active" : "nav-link"}> 
      <a href={href} {...props}>{children}</a>
    </li>
  )
}