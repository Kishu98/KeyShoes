import "./about.css";

export default function About() {
  return (
    <div className='aboutpage'>
      <header>
        <img src='/profile.jpg' width={300}></img>
      </header>
      <h1>About</h1>
      <p>Hello, I'm Kishu Jain</p>
      <p>
        I always liked writing stuff down. Wanted to create a place to jot down the random thoughts in my
        head.
      </p>
      <p>KeyShoes will be the place for exactly that.</p>
    </div>
  );
}
