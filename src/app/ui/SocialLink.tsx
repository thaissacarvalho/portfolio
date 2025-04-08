import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialLink() {
  return (
    <div className="flex space-x-4 mb-4">
    <a
      href="https://github.com/thaissacarvalho"
      target="_blank"
      rel="noopener noreferrer"
      className="text-mocha-purple-light hover:text-mocha-purple-dark"
    >
      <FaGithub size={30} />
    </a>
    <a
      href="https://linkedin.com/in/thaissacarvalho-ti"
      target="_blank"
      rel="noopener noreferrer"
      className="text-mocha-purple-light hover:text-mocha-purple-dark"
    >
      <FaLinkedin size={30} />
    </a>
  </div>
  )
}
