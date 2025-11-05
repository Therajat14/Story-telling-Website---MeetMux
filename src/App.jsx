import React from "react";
import { motion, useScroll } from "framer-motion";

const App = () => {
  const scrollYProgress = useScroll().scrollYProgress;
  return (
    <div className="min-h-screen bg-gray-800 p-30 text-center font-mono text-gray-400">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 h-3 w-full origin-left bg-gray-900"
      />
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="pb-12 text-5xl font-extrabold"
      >
        Framer Motion Scroll Motion
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellat
        adipisci totam magnam ducimus! Repellat, ipsum consectetur? Atque
        aspernatur saepe commodi neque quis accusamus inventore nam cumque vel
        eos quae hic iste enim nobis quasi dolore sint deleniti, est, porro
        obcaecati praesentium fugiat, nesciunt reiciendis eaque! Sed obcaecati
        numquam ut non dolorum hic laborum rerum! Earum odio odit obcaecati sit
        quidem reiciendis, fuga cum facere rem, cupiditate suscipit inventore
        illum. Impedit aliquid dignissimos dicta ex quibusdam recusandae cumque
        nesciunt doloribus commodi sapiente quasi assumenda, aperiam ratione
        ducimus omnis veritatis, necessitatibus illo praesentium qui
        perferendis. Delectus assumenda perspiciatis qui animi molestiae cumque.
        Sequi dolor ullam modi unde praesentium, laboriosam saepe quasi.
        Excepturi dicta hic nam consectetur at amet dolorem dolores inventore,
        modi voluptate. Exercitationem illum quisquam necessitatibus ipsam,
        nulla corporis consequuntur, ducimus harum reprehenderit, similique
        itaque ea accusantium quis recusandae. Sit quam dolorum unde est, cumque
        inventore deleniti labore, ducimus fugit voluptas autem! Dolores
        perferendis voluptatem architecto repudiandae fugiat consectetur,
        maiores, nulla debitis delectus vero veniam ipsa eligendi nostrum
        inventore excepturi saepe? Aliquid iste laboriosam doloribus reiciendis
        impedit fugiat consectetur odio dolores. Maxime qui fugiat, consequatur
        magni earum, necessitatibus et placeat eos laudantium voluptate nemo cum
        provident, ipsum porro quaerat eligendi!
      </motion.p>
      <br />
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellat
        adipisci totam magnam ducimus! Repellat, ipsum consectetur? Atque
        aspernatur saepe commodi neque quis accusamus inventore nam cumque vel
        eos quae hic iste enim nobis quasi dolore sint deleniti, est, porro
        obcaecati praesentium fugiat, nesciunt reiciendis eaque! Sed obcaecati
        numquam ut non dolorum hic laborum rerum! Earum odio odit obcaecati sit
        quidem reiciendis, fuga cum facere rem, cupiditate suscipit inventore
        illum. Impedit aliquid dignissimos dicta ex quibusdam recusandae cumque
        nesciunt doloribus commodi sapiente quasi assumenda, aperiam ratione
        ducimus omnis veritatis, necessitatibus illo praesentium qui
        perferendis. Delectus assumenda perspiciatis qui animi molestiae cumque.
        Sequi dolor ullam modi unde praesentium, laboriosam saepe quasi.
        Excepturi dicta hic nam consectetur at amet dolorem dolores inventore,
        modi voluptate. Exercitationem illum quisquam necessitatibus ipsam,
        nulla corporis consequuntur, ducimus harum reprehenderit, similique
        itaque ea accusantium quis recusandae. Sit quam dolorum unde est, cumque
        inventore deleniti labore, ducimus fugit voluptas autem! Dolores
        perferendis voluptatem architecto repudiandae fugiat consectetur,
        maiores, nulla debitis delectus vero veniam ipsa eligendi nostrum
        inventore excepturi saepe? Aliquid iste laboriosam doloribus reiciendis
        impedit fugiat consectetur odio dolores. Maxime qui fugiat, consequatur
        magni earum, necessitatibus et placeat eos laudantium voluptate nemo cum
        provident, ipsum porro quaerat eligendi!
      </motion.p>
      <br />
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellat
        adipisci totam magnam ducimus! Repellat, ipsum consectetur? Atque
        aspernatur saepe commodi neque quis accusamus inventore nam cumque vel
        eos quae hic iste enim nobis quasi dolore sint deleniti, est, porro
        obcaecati praesentium fugiat, nesciunt reiciendis eaque! Sed obcaecati
        numquam ut non dolorum hic laborum rerum! Earum odio odit obcaecati sit
        quidem reiciendis, fuga cum facere rem, cupiditate suscipit inventore
        illum. Impedit aliquid dignissimos dicta ex quibusdam recusandae cumque
        nesciunt doloribus commodi sapiente quasi assumenda, aperiam ratione
        ducimus omnis veritatis, necessitatibus illo praesentium qui
        perferendis. Delectus assumenda perspiciatis qui animi molestiae cumque.
        Sequi dolor ullam modi unde praesentium, laboriosam saepe quasi.
        Excepturi dicta hic nam consectetur at amet dolorem dolores inventore,
        modi voluptate. Exercitationem illum quisquam necessitatibus ipsam,
        nulla corporis consequuntur, ducimus harum reprehenderit, similique
        itaque ea accusantium quis recusandae. Sit quam dolorum unde est, cumque
        inventore deleniti labore, ducimus fugit voluptas autem! Dolores
        perferendis voluptatem architecto repudiandae fugiat consectetur,
        maiores, nulla debitis delectus vero veniam ipsa eligendi nostrum
        inventore excepturi saepe? Aliquid iste laboriosam doloribus reiciendis
        impedit fugiat consectetur odio dolores. Maxime qui fugiat, consequatur
        magni earum, necessitatibus et placeat eos laudantium voluptate nemo cum
        provident, ipsum porro quaerat eligendi!
      </motion.p>
      <br />
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        esse quisquam maiores vero consectetur. Magni harum deleniti et pariatur
        laborum voluptates repellat earum aliquam, corrupti quibusdam
        repellendus quasi nisi nemo cum blanditiis doloribus quae libero rerum
        mollitia dolorum, nam, veniam necessitatibus minima. Tempore velit
        voluptatem unde culpa officiis blanditiis molestiae necessitatibus
        mollitia provident nobis tempora, similique, aspernatur odio laboriosam
        assumenda alias qui, facere vel dignissimos exercitationem? Voluptatum
        omnis delectus nihil, amet esse repudiandae perspiciatis rerum aut error
        obcaecati velit pariatur explicabo aliquam minus ipsam fugiat adipisci
        nam veniam libero tempore ea? Accusantium hic eveniet corrupti illum
        sint tempora, laboriosam aut doloremque, harum nostrum recusandae
        dolores aspernatur atque tenetur odit excepturi rem nisi temporibus
        rerum quisquam officiis, incidunt unde. Officia illo iusto cum, eligendi
        sunt quis, provident voluptas deserunt commodi totam quidem et amet.
        Quod, beatae! Asperiores quasi voluptatem sequi corporis quas illum
        laborum atque nulla sit ullam voluptas incidunt magnam vel deserunt vero
        esse exercitationem, harum odit in est animi sunt! Quod minus error
        totam cumque nulla delectus aut architecto amet, doloremque suscipit
        sunt sequi dignissimos placeat velit illum dolorem. Repellat, illo nam
        reiciendis quae enim aliquid blanditiis optio et nostrum tenetur ea
        distinctio eos quibusdam, provident totam consequuntur ipsam
        necessitatibus voluptatem possimus quo quam inventore molestiae
        suscipit? Nobis amet quae at quo qui, deleniti, veritatis provident non
        debitis ratione, deserunt consequatur minus placeat distinctio commodi
        perspiciatis tempore! Temporibus eligendi repellat corporis architecto
        delectus error minima tempore, molestiae dignissimos nihil inventore
        dolores magnam sequi? Nisi optio delectus distinctio libero cumque
        illum. Eveniet, omnis quam nesciunt aspernatur voluptatum temporibus
        dignissimos quibusdam minus, optio voluptas tenetur qui necessitatibus
        sint ea hic sunt, eos quaerat dolor quia eligendi numquam pariatur
        doloribus. Vero, culpa ipsum. Autem, distinctio nulla explicabo nam sint
        culpa iste facere modi deserunt maiores incidunt omnis laboriosam dolor
        at voluptatem error!
      </motion.p>{" "}
      <br />
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus
        soluta alias accusamus dolor pariatur incidunt aliquid sint, sit
        suscipit assumenda optio maiores earum cumque. Debitis ipsa aliquam
        exercitationem tenetur.
      </motion.p>
    </div>
  );
};

export default App;
