import React from 'react'

const Work = () => {
  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl text-white">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue format-invert">
                <div className="mb-4 lg:mb-6 not-format">
                    <address className="flex items-center mb-6 not-italic">
                        <div className="inline-flex items-center mr-3 text-sm ">
                            {/* <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" /> */}
                            <div>
                                <a href="#" rel="author" className="text-xl font-bold">Jese Leos</a>
                                <p className="text-base text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                                <p className="text-base text-gray-400"><time>Feb 8, 2022</time></p>
                            </div>
                        </div>
                    </address>
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">Best practices for successful prototypes</h1>
                </div>
                <p>Flowbite is an open-source library of UI components built with the utility-first
                    classNamees from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
                    datepickers.</p>
                <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                    you can think things through before committing to an actual design project.</p>
                <p>But then I found a <a href="/">component library based on Tailwind CSS called
                        Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation
                    bars, cards, form elements, and more which are conveniently built with the utility classNamees from
                    Tailwind CSS.</p>
                <h2>Getting started with Flowbite</h2>
                <p>First of all you need to understand how Flowbite works. This library is not another framework.
                    Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
                    documentation.</p>
                <p>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
                    and datepickers which you can optionally include into your project via CDN or NPM.</p>
                <h2>When does design come in handy?</h2>
                <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
                    will come in handy:</p>
                <ol>
                    <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                        follow your intended user journey and buy something from the site you’ve designed? By running a
                        usability test, you’ll be able to see how users will interact with your design once it’s live;
                    </li>
                    <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                        properly? Pass your prototype to your data protection team and they can test it for real;</li>
                    <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                        providing your client with a hands-on experience;</li>
                    <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
                        design elements, designers and developers can understand each other — and the project — better.
                    </li>
                </ol>
                <h3>Laying the groundwork for best design</h3>
                <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                    you can think things through before committing to an actual design project.</p>
                <p>Let's start by including the CSS file inside the <code>head</code> tag of your HTML.</p>
                <h3>Understanding typography</h3>
                <h4>Type properties</h4>
                <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                    letters. A typeface represents shared patterns across a collection of letters.</p>
                <h4>Baseline</h4>
                <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                    letters. A typeface represents shared patterns across a collection of letters.</p>
                <h4>Measurement from the baseline</h4>
                <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                    letters. A typeface represents shared patterns across a collection of letters.</p>
                <h3>Type classNameification</h3>
                <h4>Serif</h4>
                <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                    Typefaces with serifs are called serif typefaces. Serif fonts are classNameified as one of the
                    following:</p>
                <h4>Old-Style serifs</h4>
                <ul>
                    <li>Low contrast between thick and thin strokes</li>
                    <li>Diagonal stress in the strokes</li>
                    <li>Slanted serifs on lower-case ascenders</li>
                </ul>
                <ol>
                    <li>Low contrast between thick and thin strokes</li>
                    <li>Diagonal stress in the strokes</li>
                    <li>Slanted serifs on lower-case ascenders</li>
                </ol>
                <h3>Laying the best for successful prototyping</h3>
                <p>A serif is a small shape or projection that appears at the beginning:</p>
                <blockquote>
                    <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from
                        login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
                </blockquote>
                <h4>Code example</h4>
                <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                    Typefaces with serifs are called serif typefaces. Serif fonts are classNameified as one of the
                    following:</p>
                <h4>Table example</h4>
                <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                </p>
                <h3>Best practices for setting up your prototype</h3>
                <p><strong>Low fidelity or high fidelity?</strong> Fidelity refers to how close a prototype will be to
                    the real deal. If you’re simply preparing a quick visual aid for a presentation, a low-fidelity
                    prototype — like a wireframe with placeholder images and some basic text — would be more than
                    enough. But if you’re going for more intricate usability testing, a high-fidelity prototype — with
                    on-brand colors, fonts and imagery — could help get more pointed results.</p>
                <p><strong>Consider your user</strong>. To create an intuitive user flow, try to think as your user
                    would when interacting with your product. While you can fine-tune this during beta testing,
                    considering your user’s needs and habits early on will save you time by setting you on the right
                    path.</p>
                <p><strong>Start from the inside out</strong>. A nice way to both organize your tasks and create more
                    user-friendly prototypes is by building your prototypes ‘inside out’. Start by focusing on what will
                    be important to your user, like a Buy now button or an image gallery, and list each element by order
                    of priority. This way, you’ll be able to create a prototype that puts your users’ needs at the heart
                    of your design.</p>
                <p>And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.
                </p>
                <section className="not-format">
                    <div className="flex justify-between items-center mb-6">
                        {/* <h2 className="text-lg lg:text-2xl font-bold">Discussion (20)</h2> */}
                    </div>
                </section>
            </article>
        </div>
      </main>

{/* <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
  <div className="px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first office</a>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 2 minutes
              </a>
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Enterprise design tips</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 12 minutes
              </a>
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">We partnered with Google</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 8 minutes
              </a>
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first project with React</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 4 minutes
              </a>
          </article>
      </div>
  </div>
</aside>

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
          <p className="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                         </svg>
                      </div>
                      <input className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" />
                  </div>
                  <div>
                      <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
      </div>
  </div>
</section> */}
    </div>
  )
}

export default Work