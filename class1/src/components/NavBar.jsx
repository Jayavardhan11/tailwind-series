export default function NavBar(){
  const links = [
    {
      title:"Founders",
      href:"#"
    },
     {
      title:"Pricing",
      href:"#"
    },
     {
      title:"Guide",
      href:"#"
    },
     {
      title:"Log In",
      href:"#"
    }
  ]
  return(
    <div className="navbar-root">
      <div className="logo">FinTech</div>
      <div className="links">
        {links.map((link, idx)=>
        <a className="links-items" href={link.href} key={idx}>{link.title}</a> 
        )}
        <button className="btn">Get Started</button>
      </div>
    </div>
  )
}