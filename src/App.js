
import './App.css';
import Header from './components/Header';
import TextPage from './components/TextPage';
import ScrollPage from './components/ScrollPage';
import Footer from './components/Footer';

function App() {

  const textPage = {
    top: {
      img: 'https://s3-alpha-sig.figma.com/img/4851/8411/d6147643ebbf378a00a347a1391fc7d2?Expires=1675036800&Signature=dfuEGeZr-PJeunE4KazIvX-4u8FVlFrv4QPpkvoN9ULtbEpxO5EVJao~fHWrTwXtq1lsVYfMiSt8zxZU7mfWaXxjTZqvrFRVIc9Ze4sXDITzYY7HFmF055j7A8vese~DECUKDliKAEgp5y~HavfuSg1BXFh9-miYfRx3jKNTeXp3geuovDa2GrJ4rPnpIb9psoeKarPAkofhcgYLsjPGNeyU40rk11Rg1hqNxUbD9YwRZt2vrh6QVKwBcQIeiJgDOdJomopjQRsbTo6VHR-V2MzLsPmhJsagaB9SEQxnJXaUqiUHXvFYLd7rdSm1n79b-i0DkWlpUI~aWNwaAjncrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    bottom: {
      img: 'https://s3-alpha-sig.figma.com/img/6cf6/3012/f46fa9bbc5cc6000a404e50d7938d989?Expires=1675036800&Signature=JPcW1Ktnd~yU6ASen9ObEepASu2uSAQWs2efRsRH0W5wE6QcsamKcDzyEW3FzgqSED04dxoxXYGnJBjW2jQtGyafAV1Y4K9Ph2AXpqIhjTttqzsincSMWqKpOMLd8huz4pniUjiNHJ49UH228kGSKHeQKnP49Of8kkJH7GrIWbmNN0A6KeJgxyHqRgtSxdOiVx2pByjpSpRn67OAYpZlDpIXT8LCFAdeZqQdZUNQK6dmlnhSl0VD1xefycJbfwKj8G-v4kS6zO67SAPanMxDl8I1ift2yBwJNfbf36Jp55lE2g7EiBiOlLJFPqyUe2fF1y6PyqGpq8cKbbPHcU42pg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    }
  }
  const textPage2 = {
    top: {
      img: 'https://s3-alpha-sig.figma.com/img/1ee0/7f87/1920745d379b8e4dbad31d03fa654e11?Expires=1675036800&Signature=p6Kjx~lIEriiujzAax0C9v6HWInr3igJuxIWVq7j9XXnk3FwsMd5mLn1d8rXXT23U-mRRBVZFuIWMB7LX9mKAvv9UZ4XKs9onxTMT1gu39GavHVj-r9d8ARn1t68BO4RJQOsnJho~-8Y0Bt60VtZZssoQBD4r6xjocmWoUOvPcOBZW77g-SrjWw4MCqgqWD5WRLq4uoRrgR~D2Ypi8o4ImEtqJp2WTPQFXZ7UAAo5gv6K1am~cLCTpqnrqTj7gKql0TuTlHC0MYRwX76tbI6nIY2hxkv930v3KsgGQkIJKStdAm9ncjSoRlqtFBgm9~OjU19xIhN1pkKTcW~wP48Fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    bottom: {
      img: 'https://s3-alpha-sig.figma.com/img/e613/05f1/a4ff41f6cb450b2a6f6aa995cb0feee4?Expires=1675036800&Signature=eVA1gGFX9sPMt6naJLL7s9UBHNQrEq89UFllcKYnw-AI35yxkQPWlmkUCm~GErFXzHJSIgKmFirbBSD4giZuq4Wv5dSsc2xOSJ50iqWx6QX-8s0wjWBSRreZnMIOf5YPuCFm7XZ4xnPtLyRPUovXtQM7pvbGLdcbUlRiqugakw4~xjrqAOxVMaa234-qfwyyTAznlFkP1B23bAodjHWWoD0v5bWXf646pfBOv-CHgK5-l5JXEI4XvqsMzTTAJCJQFwEUYp05cPQlrxe2Xe5Vt8PRQ3s2eYd5OeaktRKh-IAxWPlRzRsBDZoG-i~Ix4qoQWEduiVT9xPmXYnHcJ7J~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    }
  }
  const scrollImg = [
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/1754/04a5/638047fc70c4c2b470f771b46f0915a8?Expires=1675036800&Signature=obwfcCJv2zfws78ljkx5pddkDvaC7-~1G6s~CLHte4dGU121LmexD5Gn8MWsU59G7Ah5UqwbkLRLNf5oBnwQmbAfXRKJKO9fzuWzWtb1O16EJz8AiQXFYzrv9kOGtypmRQEvfXTWQDNYnhNwV6ifgtjLihlV4dK3IRjHsD1FJ8oZiN7ELHzWKA3q2g3FuqLcHB8OmkkvdApPlIc79y36uFuOfvPkZMiPQddhyzT0aQDs8v0lhAn7NVPIoOvd1oqxZ7rF58L2f~bx9Wwk-lZTpo3lul7y-3Qf2ea9AlikmlapVvGOLXa26nROZ6sUTRaKcTAFGXuOgpSDy7M754XmPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/3a5b/d39e/889f521eb14330cae66c654b17d4931e?Expires=1675036800&Signature=AfdQxR2ybgl1jW2L~uYVquPj1t5tjYcCqTKsciAo~WIgN8Wicc83c0W3Dj~i8ESTgVUTIqaxbMNZojonhdCl7nj8JyjudjckVeGyzEogrGJqpAeZI7K92vqOVwcG~m1xr3qydWd5TaEr0YBo3XnHTnxW24FKZ2hqGkG~6DkCVEnXXcaiNojEKLs6U4iNWkEMWnwPmgqMuMkfWBhmqY8FLpNa~cgSH0wRbQgQgCI-pBL1tHg4vbwIXMtf1ftaGt7YqXD1ISmuTsCo871d~SFclHmK-aO6BXC52okLzM-ft86VImbeV7OsCGUpIfPZkmMiLgdfW5rigzPBzWfyrC9Bhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/c532/6728/4e1dee14b549efb168f3a770c9650916?Expires=1675036800&Signature=g1DYlbVjzAhZ~Oej4HFFR0qiKt17HzQVHGa3h708vEBuqWP7xur8ZIRrWJ7DL6PN19IN0DOrY6Ew2ipsDFuehYTKLM4Wc8SkR6uvuA~PV9HNfXY1E0IvK1W~w7ql86kgNwK-PXBIQOTOxiBPmmlFjDtiu6lS~CfoM1-KNzzJUC39QalketEeWo2phZpX~2DMi7ueEvztElb7rtnaru4QGRvjX1ub0XfMmRiGtpG8m9EojaBxrWiGcWq1ZpjUcGmX7e-nUzhmGgp3BYNsJKVFQaT2KK95Giirc4B4XipBvaS2FlJ7ZLC6Y7KQ~QpeSNUC0tTP0NWrOiLtJ6YJLacVYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/d3c2/e642/64f365dfd32095bfc091929300f86238?Expires=1675036800&Signature=YYSKCwKgcvFK4CQ9-h-tW3UkMDtD2VXb-JFClTzwdVnuTXbzhqhUjBnjdp9ih6m8LdbvlzegGwk4Fcr1knk7ksxZ7oQsD1LyXUElbtLTm47OmKtFrYRBPIuHysxaP1FiTPk-dCrITw2jn4irdYlxq7k9sPu3AT~N4chGPpcocyVtq6bHSdJbo6ZoZ5rSqMIovVvMdG~zZnLJrfhNw~r5K8np0t~l2aN6eiOtfPT~xpEOiWpfCsIOh-A~7NxUVJlAj9YE0NN9aM5IxJgKgKNbjiCmgxNBXrjWSoYBYeSARJ6gyXqUGNAkMCQ5Cv7rlpZ1vjSDK6aiDWPm9YlqyfOP2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/3264/0000/17b91cfbe04e31c3aa896a6620e7370f?Expires=1675036800&Signature=ByyjHNzUI~yGQcgqZ2RMu40H-YivglkeJMYj4bNGxP8VzVd52jfF14eGYGn7oYoIvz8CcA6O1ZlKkuOpthw-QC3~C~pD9orQ8oiHh0PFNZYCjvKQ2yWVPFMxtal7Nz7txAwO6c2RRcJs2mMG8EcRp92u~6Wt4zgafgbeAhZyhDvOmbjUy5aKj0KWE4F5JdNibVDgIujbqJCnmhzD2zg18uV9oHprJ0IW-ZWJV52Sq9cOXojpPw3J2u9rY~4Bq0wGaQZj8D0ptL8XSkHRd8hn8gVuTgqunhUgQTWdaqbJPGO1JkZ7kAzT2s4oQBnK903wViqSi2gH5OjFRjzd4gCBsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/7067/bbfd/8a6abba08181df7252aa414443905ce9?Expires=1675036800&Signature=VYhumJIShWKzmsm7jM37Cj1sZwNyRblBemJDSyd3DKKtPRb6qrrKbAklYJ1eI-Y0~7~w~kWum-hquP2t3NmnhF0mO4BVbZbpdohSc-cBtmGGSsSK03Mm5vRQyVKHjAFtwZZQhH~fMd-MRMT4HoI~uMAzZpG5fzFXha4MXTvvIWB4IkKnlfr5PLGrCfPP-WKLe~GxINkq3xvp08YmpcWpDYL7unmTKt9ldmoSeRL9QvyRW7w0HJpOD72QCXO4h7y4cgjMuEN1qwfbH6YAJAqD3Ju76Ghf3mPsV5-uOqelu0YVJTXnSRyYzJI1AIXkQ84X0p1ZvkZYXMFqZvvVf6x~0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/8707/db5f/a8d088db742f9ee6abe209ba24bf618b?Expires=1675036800&Signature=b4EGt3k2UCFLQm5tIX7ywnCvQ-mJwT5KWCBbRu0vIjeorFDBNLrRz0aUatEr6Cdoni41NpQfXw1UX8xkLt42Gh0AFbLUVPhNrvYrjOWNsSbY0lFbXpF~v3fohF4CNg39ep5nxNVhfWbfmvYQBrezlJ45cj9Q84vtxeBOgBOnClUXNLqa~BqKzjxxo9EzdLGAZXCDCdd3nKDK3JdPIh-lyzANeE7Zme21XLcwflIdWLu3kmIKVqKiGfHRUAKmfyIdYr1RAxsqsmwFhmJ14ZT2xsXgCZbuZWk1ZB1UoXkKN~4yuahZ7xZOZ0Q~ys0YfdbYxCvPFEhBvZYUy4JHtX3VRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/8954/2a5f/78ec92ca2525213d39fb5a37b5a20372?Expires=1675036800&Signature=jJ8N0oFHe8jJcHVZ9gM8LbcfDgx2l~MsFne9aCe8pb55jZzwyjDTm-IZX8Qn00odNg-hZDd1QPd6i~4T10ZgvnguBAY7Ub~CC6TbpSq-8T0VawyTYQq76WEbUs-397TW2wSwbJXl9VOpFM9YS1HWcoSNMUK9hZ5i7uw6t8JSJIOUFHA~fjk3QzpQEx7MKNwZAb~v5xARuXpxkqDHDWlgky9WXTImID9wLHB4F1E8chhpS~rJQ-LyxbCk85lfhJvcb67HtfQqI~AUqqeiQprqyymnqciu-LqJcsg007GiHY8k8Pu2jnfejUGfz9J3f5~578U56~fw4qDksS92tR6euQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/8fae/c965/19bac631d8482aae9f0d75954b380bc7?Expires=1675036800&Signature=S0NTTszzexcmv3Cvod6E07SVDQ-8nBQ5fcULPqa7MqYn6H4b8nyp4bXScwTlEJKp985acZFv3RksoN80xr66BUT1qiaezr1zdAVodc6C3gFgI8VXuip7uBchUYcJfUDOjcxNikDcniXQhgoIl1YdKi7BJUEcyIIZTh2ycuW9RZkV3bUNQpI~bBQMV17Lw2~v2u8PlXkREpVVrQg5rV2SS0Xycy3UKBhvJL~v9~vYZlm0UNVE~TDHYNREBuDh9V9lTqBwiEZKCQMhDg9rq4azfF9TKwlV9XuIoRS1x~niBAG7wtpvljjL2SqqcpelQ9NpVZZ4EKaw86D1tTe0QLAaQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/99ff/8a7d/0af26621de013c40d5f92fcbf9a02dc7?Expires=1675036800&Signature=NZifpxrDWhQT08b3APjF8clRSyQjZc8ByN4a-J0Vgx~9xaYwZijUqqKQ2nyMQKO2STJiACiBry6OU2JJIUX0sl8MYpTB~IW-DljT8lik9CDXbjaJnJs5bbvQCkRP87-U41BX1C22UT5faQVurrKWFKNsOkAA9iPYVOuI5G3o9-muBxHbxIHiSEZBu-JtRgcExeHOTUwUbGOLRq3CZVDlueUwooeVJgDtsZqpPmtojZnNtaHX3bsnqQ-C-VVYlR5zcjN5LGpLH2thQ8mRKxsVyh6whh5pdZZuIUDZK2qBGYU5YCj9L1GaGEG6m72Hhpg152UoDjTDuhHuU3GyG1V6oQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/c399/1f0d/df6c3a5d7cbacac3bc30c1779b04e2e8?Expires=1675036800&Signature=HLH~OVURESjgQdx6jI9EGxtQkDilMcCGV2DXSnAPA9aGUq9RFYtSpLF2FVbtBtqz~yvmGh67TuZjqsuUAk~W2FY1HWc~KmOCYeMoPWI86CWj3R2OJVuAponJ1LHk9BQf3EjoNPi0QBgb3Av7wyzYGbx4n3Mq-r4jh6JWLmbKyDAq7svUOVsYJxVOMiEWkABx0WwQuUYzMHbNzndAZW08wPmNkgs5UXPts3jq2SNYgG5P1zttLHLxQwnnSxiS3qjB8GKIVGfgJYcYDYArTrieofiYHq5VWZ3Q9BNUm9Igxmx9wNjc8IsyMMvJyPz9ywjNlwMOrxRWATAeybPE2XRSkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      imgUrl : 'https://s3-alpha-sig.figma.com/img/db3c/1993/d950fd0e4c70da0bb808895ba85fe61c?Expires=1675036800&Signature=Bubu-GZcL~U5NZztKV0SpGo6xnMpIt38OtCJ3aTw7G972DMvmuIk3ZXs0tiox~~LPmL8v~2xD~~O3~vTJ~z-x0jlap~TMs4tu2J8dxa3JG8GLXQENXXGttklILv6F9V3yCqfS9Mr3lz9-mGc954YCpEp9GdIFlFTUaqxj0rr7u73W4dfWdX0IJ1y1fP5pvzVkeBCMF-T5YU7~~fUWmRyt2GmOtpJ-SZ-aonTSWBl7wdAk8uKU05HQHd7q935EJ0nelC4Xh4aBwMPY1ogqmPRkwb3t1KCi8mfTBAwXKPKmCMImg8xq5BwoJi8rcZAhqGdUtyj1f4IRc8Da~SK-N~O8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    }
  ]

  return (
    <div className="App">
      <Header/>
      <TextPage info={textPage}/>
      <ScrollPage info={scrollImg}/>
      <TextPage info={textPage2}/>
      <Footer/>
    </div>
  );
}

export default App;
