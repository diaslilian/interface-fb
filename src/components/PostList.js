import React, { Component } from 'react';

import PostItem from './PostItem';

import lihAvatar from '../assets/images/lih.png';
import juhAvatar from '../assets/images/juh.png';
import kitoAvatar from '../assets/images/kito.png';
import rafaAvatar from '../assets/images/rafa.png';
import daviAvatar from '../assets/images/davi.png';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: 1,
          author: {
            name: 'Rafael BC',
            avatar: rafaAvatar,
          },

          date: '30 Set 2019',
          content: 'Pessoal, alguém sabe se a GAMA está contratando?',
          comments: [
            {
              id: 2,
              author: {
                name: 'Juliana Mascarenhas',
                avatar: juhAvatar,
              },
              date: '30 Set 2019',
              content:
                'A GAMA está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord ou em outras redes! (Sério, me chamem mesmo.)',
            },
          ],
        },
        {
          id: 3,
          author: {
            name: 'João Marcos',
            avatar: kitoAvatar,
          },
          date: '30 Set 2019',
          content:
            'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
          comments: [
            {
              id: 4,
              author: {
                name: 'Lilian Dias',
                avatar: lihAvatar,
              },
              date: '30 Set 2019',
              content:
                'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!',
            },
            {
              id: 5,
              author: {
                name: 'Davi Magalhães',
                avatar: daviAvatar,
              },
              date: '30 Set 2019',
              content:
                'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes',
            },
          ],
        },
      ],
    };
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
