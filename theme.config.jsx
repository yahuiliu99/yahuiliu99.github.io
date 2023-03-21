/*
 * @Date: 2023-03-21 21:19:59
 * @Author: Liu Yahui
 * @LastEditors: Liu Yahui
 * @LastEditTime: 2023-03-21 21:42:54
 */
export default {
    footer: <p>2023 © Yahui Liu.</p>,
    head: ({ title, meta }) => (
      <>
        {meta.description && (
          <meta name="description" content={meta.description} />
        )}
        {meta.tag && <meta name="keywords" content={meta.tag} />}
        {meta.author && <meta name="author" content={meta.author} />}
      </>
    ),
    readMore: 'Read More →',
    postFooter: null,
    darkMode: false,
    navs: [
      {
        url: 'https://github.com/shuding/nextra',
        name: 'Nextra'
      }
    ]
  }