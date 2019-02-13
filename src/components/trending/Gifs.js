import React from 'react';
import { Link } from 'react-router-dom';

const Gifs = props => {
  const { gif } = props;
  return (
    <div className='containerGif'>
      <div className='gif_username'>
        <p className='gif_usernameBy'>BY:</p>
        <span className='gif_usernameName'>{gif.username}</span>
      </div>
      <div className='gif_title'>
        <i className='fab fa-slack-hash' />
        <p className='gif_titleGif'>GIF:</p>
        <span className='gif_titleTitle'>{gif.title}</span>
      </div>
      <Link
        to={{
          pathname: `/gif/gifs/${gif.id}`,
          state: { url: gif.images.original.url }
        }}
        title={gif.title}
        className='gif_link'
      >
        <button className='gif_linkButton'>Check this awesome GIF</button>
      </Link>
    </div>
  );
};

export default Gifs;
