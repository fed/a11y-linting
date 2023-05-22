/** @jsxImportSource @compiled/react */
import React from 'react';
import { token } from '@atlaskit/tokens';
import { Navigation } from './navigation';
import { Header } from './header';

export function App() {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateAreas: `'header header' 'navigation content' 'footer footer'`,
        gridTemplateColumns: '150px 1fr',
        gridColumnGap: '16px',
        height: '100vh',
        width: '100%',
        margin: 0,
      }}
    >
      <div css={{ gridArea: 'header' }}>
        <Header />
      </div>

      <div
        css={{
          gridArea: 'navigation',
          backgroundColor: token('color.background.neutral'),
          borderRight: `1px solid ${token('color.border')}`,
        }}
      >
        <Navigation />
      </div>

      <main css={{ gridArea: 'content' }}>
        <h1>Find the best deals online</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien velit, facilisis at ultrices vitae,
          luctus placerat ex. Fusce vitae sapien sit amet magna bibendum accumsan vitae non purus. In aliquam accumsan
          mauris, et ultrices risus vehicula vel. Nullam at auctor massa. Praesent eget quam lectus. Quisque at ex
          volutpat, pellentesque lorem condimentum, vehicula dui. Sed eu enim ut sem bibendum convallis eget vitae erat.
          Praesent vitae lobortis arcu. Curabitur varius elit nec dui condimentum accumsan. Pellentesque sagittis arcu
          ac ex cursus malesuada. Etiam ac efficitur urna, a interdum diam. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Curabitur vel molestie lectus, sit amet aliquet metus.
        </p>

        <h4>Suggestions for you</h4>

        <p>
          Sed pulvinar condimentum fermentum. Proin sagittis augue magna, et rutrum magna vulputate ut. Donec tempor sed
          turpis vitae sollicitudin. Mauris libero augue, bibendum sed lorem non, rutrum viverra mi. Nunc sed
          sollicitudin justo. Aliquam quis consectetur est. Nam fringilla sit amet massa ut imperdiet.
        </p>

        <p>
          Quisque aliquam scelerisque ante a porta. Nam vehicula nulla ante, tempus iaculis metus sodales sit amet.
          Maecenas eu enim massa. Aliquam laoreet porta quam non eleifend. Morbi eget consectetur dolor. Quisque
          dignissim eros ac ligula eleifend faucibus ut id erat. Nullam efficitur vehicula nisl, eu vulputate eros
          sodales eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id risus leo. Vivamus nec augue ac
          nisl dictum pellentesque. Ut aliquet condimentum augue, ac tincidunt tellus fringilla eu. Sed vel ex volutpat,
          placerat ipsum non, mollis metus. Morbi odio lectus, facilisis vel tempor ac, placerat vel leo.
        </p>

        <h2>Nearby destinations from Sydney</h2>

        <p>
          Donec vel dignissim neque, id malesuada eros. Vivamus a metus sit amet eros volutpat cursus. Donec orci est,
          facilisis sed consectetur at, suscipit ac dolor. Duis semper libero sit amet nisl dignissim, fringilla rutrum
          urna feugiat. Mauris nec orci et nisl pretium vestibulum. In vehicula sagittis volutpat. Aliquam vulputate sit
          amet lectus id elementum. Praesent ac gravida sapien, eu vulputate libero. Suspendisse vestibulum eros id
          tellus pharetra, quis rutrum ipsum porta. Etiam quam felis, venenatis vitae massa vitae, lacinia iaculis
          lacus. Aliquam vulputate vitae quam nec vehicula. Cras dignissim pulvinar sapien vitae efficitur. Donec
          accumsan sollicitudin purus, non ornare quam lacinia sed. Cras lacinia sem in fringilla auctor.
        </p>

        <p>
          Donec sit amet libero aliquam, rhoncus mauris at, egestas nunc. Suspendisse elementum augue neque, ac
          imperdiet lorem egestas at. Quisque faucibus odio nec elementum gravida. Pellentesque pretium eget orci non
          elementum. Nullam at massa posuere, egestas orci vel, blandit velit. Quisque in interdum libero, eu tincidunt
          tellus. Suspendisse ut sodales purus, eu bibendum erat. Nulla eget velit ac neque blandit ultricies at nec
          orci. Nullam ut diam rhoncus eros elementum aliquam eu non libero. Quisque pulvinar vestibulum urna sed
          congue. Nunc efficitur velit et tincidunt pellentesque. Nunc augue lorem, rhoncus ac malesuada in, vulputate
          ac dolor. Phasellus sapien tellus, ultricies vel lacus in, ullamcorper tempor turpis. Aliquam auctor pulvinar
          risus, et pellentesque ipsum elementum vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien velit, facilisis at ultrices vitae,
          luctus placerat ex. Fusce vitae sapien sit amet magna bibendum accumsan vitae non purus. In aliquam accumsan
          mauris, et ultrices risus vehicula vel. Nullam at auctor massa. Praesent eget quam lectus. Quisque at ex
          volutpat, pellentesque lorem condimentum, vehicula dui. Sed eu enim ut sem bibendum convallis eget vitae erat.
          Praesent vitae lobortis arcu. Curabitur varius elit nec dui condimentum accumsan. Pellentesque sagittis arcu
          ac ex cursus malesuada. Etiam ac efficitur urna, a interdum diam. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Curabitur vel molestie lectus, sit amet aliquet metus.
        </p>

        <p>
          Sed pulvinar condimentum fermentum. Proin sagittis augue magna, et rutrum magna vulputate ut. Donec tempor sed
          turpis vitae sollicitudin. Mauris libero augue, bibendum sed lorem non, rutrum viverra mi. Nunc sed
          sollicitudin justo. Aliquam quis consectetur est. Nam fringilla sit amet massa ut imperdiet.
        </p>

        <p>
          Quisque aliquam scelerisque ante a porta. Nam vehicula nulla ante, tempus iaculis metus sodales sit amet.
          Maecenas eu enim massa. Aliquam laoreet porta quam non eleifend. Morbi eget consectetur dolor. Quisque
          dignissim eros ac ligula eleifend faucibus ut id erat. Nullam efficitur vehicula nisl, eu vulputate eros
          sodales eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id risus leo. Vivamus nec augue ac
          nisl dictum pellentesque. Ut aliquet condimentum augue, ac tincidunt tellus fringilla eu. Sed vel ex volutpat,
          placerat ipsum non, mollis metus. Morbi odio lectus, facilisis vel tempor ac, placerat vel leo.
        </p>

        <p>
          Donec vel dignissim neque, id malesuada eros. Vivamus a metus sit amet eros volutpat cursus. Donec orci est,
          facilisis sed consectetur at, suscipit ac dolor. Duis semper libero sit amet nisl dignissim, fringilla rutrum
          urna feugiat. Mauris nec orci et nisl pretium vestibulum. In vehicula sagittis volutpat. Aliquam vulputate sit
          amet lectus id elementum. Praesent ac gravida sapien, eu vulputate libero. Suspendisse vestibulum eros id
          tellus pharetra, quis rutrum ipsum porta. Etiam quam felis, venenatis vitae massa vitae, lacinia iaculis
          lacus. Aliquam vulputate vitae quam nec vehicula. Cras dignissim pulvinar sapien vitae efficitur. Donec
          accumsan sollicitudin purus, non ornare quam lacinia sed. Cras lacinia sem in fringilla auctor.
        </p>

        <p>
          Donec sit amet libero aliquam, rhoncus mauris at, egestas nunc. Suspendisse elementum augue neque, ac
          imperdiet lorem egestas at. Quisque faucibus odio nec elementum gravida. Pellentesque pretium eget orci non
          elementum. Nullam at massa posuere, egestas orci vel, blandit velit. Quisque in interdum libero, eu tincidunt
          tellus. Suspendisse ut sodales purus, eu bibendum erat. Nulla eget velit ac neque blandit ultricies at nec
          orci. Nullam ut diam rhoncus eros elementum aliquam eu non libero. Quisque pulvinar vestibulum urna sed
          congue. Nunc efficitur velit et tincidunt pellentesque. Nunc augue lorem, rhoncus ac malesuada in, vulputate
          ac dolor. Phasellus sapien tellus, ultricies vel lacus in, ullamcorper tempor turpis. Aliquam auctor pulvinar
          risus, et pellentesque ipsum elementum vitae.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien velit, facilisis at ultrices vitae,
          luctus placerat ex. Fusce vitae sapien sit amet magna bibendum accumsan vitae non purus. In aliquam accumsan
          mauris, et ultrices risus vehicula vel. Nullam at auctor massa. Praesent eget quam lectus. Quisque at ex
          volutpat, pellentesque lorem condimentum, vehicula dui. Sed eu enim ut sem bibendum convallis eget vitae erat.
          Praesent vitae lobortis arcu. Curabitur varius elit nec dui condimentum accumsan. Pellentesque sagittis arcu
          ac ex cursus malesuada. Etiam ac efficitur urna, a interdum diam. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Curabitur vel molestie lectus, sit amet aliquet metus.
        </p>

        <p>
          Sed pulvinar condimentum fermentum. Proin sagittis augue magna, et rutrum magna vulputate ut. Donec tempor sed
          turpis vitae sollicitudin. Mauris libero augue, bibendum sed lorem non, rutrum viverra mi. Nunc sed
          sollicitudin justo. Aliquam quis consectetur est. Nam fringilla sit amet massa ut imperdiet.
        </p>

        <p>
          Quisque aliquam scelerisque ante a porta. Nam vehicula nulla ante, tempus iaculis metus sodales sit amet.
          Maecenas eu enim massa. Aliquam laoreet porta quam non eleifend. Morbi eget consectetur dolor. Quisque
          dignissim eros ac ligula eleifend faucibus ut id erat. Nullam efficitur vehicula nisl, eu vulputate eros
          sodales eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id risus leo. Vivamus nec augue ac
          nisl dictum pellentesque. Ut aliquet condimentum augue, ac tincidunt tellus fringilla eu. Sed vel ex volutpat,
          placerat ipsum non, mollis metus. Morbi odio lectus, facilisis vel tempor ac, placerat vel leo.
        </p>

        <p>
          Donec vel dignissim neque, id malesuada eros. Vivamus a metus sit amet eros volutpat cursus. Donec orci est,
          facilisis sed consectetur at, suscipit ac dolor. Duis semper libero sit amet nisl dignissim, fringilla rutrum
          urna feugiat. Mauris nec orci et nisl pretium vestibulum. In vehicula sagittis volutpat. Aliquam vulputate sit
          amet lectus id elementum. Praesent ac gravida sapien, eu vulputate libero. Suspendisse vestibulum eros id
          tellus pharetra, quis rutrum ipsum porta. Etiam quam felis, venenatis vitae massa vitae, lacinia iaculis
          lacus. Aliquam vulputate vitae quam nec vehicula. Cras dignissim pulvinar sapien vitae efficitur. Donec
          accumsan sollicitudin purus, non ornare quam lacinia sed. Cras lacinia sem in fringilla auctor.
        </p>

        <p>
          Donec sit amet libero aliquam, rhoncus mauris at, egestas nunc. Suspendisse elementum augue neque, ac
          imperdiet lorem egestas at. Quisque faucibus odio nec elementum gravida. Pellentesque pretium eget orci non
          elementum. Nullam at massa posuere, egestas orci vel, blandit velit. Quisque in interdum libero, eu tincidunt
          tellus. Suspendisse ut sodales purus, eu bibendum erat. Nulla eget velit ac neque blandit ultricies at nec
          orci. Nullam ut diam rhoncus eros elementum aliquam eu non libero. Quisque pulvinar vestibulum urna sed
          congue. Nunc efficitur velit et tincidunt pellentesque. Nunc augue lorem, rhoncus ac malesuada in, vulputate
          ac dolor. Phasellus sapien tellus, ultricies vel lacus in, ullamcorper tempor turpis. Aliquam auctor pulvinar
          risus, et pellentesque ipsum elementum vitae.
        </p>
      </main>

      <footer css={{ gridArea: 'footer', borderTop: `1px solid ${token('color.border')}` }}>Footer</footer>
    </div>
  );
}
