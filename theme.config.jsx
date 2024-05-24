export default {
    footer: (
      <div className="footer">
        <hr />
        <small style={{ display: 'block', marginTop: '6rem' }}>
          {/* <abbr
            title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
            style={{ cursor: 'help' }}
          >
            CC BY-NC 4.0
          </abbr>{' '} */}
          {new Date().getFullYear()} © Yahui Liu
          <a className="feed" href="/feeds">
            Feeds (RSS)
          </a>
        </small>
        <style jsx>{`
          a.link {
            margin-right: 0.5rem;
            font-size: 14px;
            font-weight: normal;
            font-style: italic;
          }
          a.feed {
            float: right;
          }
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
      </div>
    ),
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
    darkMode: true,
    // navs: [
    //   {
    //     url: 'https://github.com/yahuiliu99',
    //     name: 'Github'
    //   }
    // ]
  }