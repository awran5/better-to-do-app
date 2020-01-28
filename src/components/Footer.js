import React from 'react'

const Footer = () => {
  return (
    <div className="small text-light mb-2 footer ">
      <div className="text-center footer-info">
        <ul className="list-inline">
          <li className="list-inline-item">v1.0.0</li>
          <li className="list-inline-item"> - </li>
          <li className="list-inline-item">
            <a href="https://github.com/awran5/shorten/" target="_blank" title="GitHub" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li className="list-inline-item"> - </li>
          <li className="list-inline-item">
            <a href="https://github.com/awran5/shorten/issues" target="_blank" title="Issues" rel="noopener noreferrer">
              Issues
            </a>
          </li>
        </ul>
        <div className="copyright">
          © {new Date().getFullYear()}. Modified with ❤️ by
          <a href="https://gkstyle.net/" title="GK STYLE">
            {' '}
            GK STYLE{' '}
          </a>
          team.
        </div>
      </div>
    </div>
  )
}

export default Footer
