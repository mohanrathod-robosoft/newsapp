import React from "react";

const Bookmarklet = () => {
  return (
    <table
      width={500}
      cellPadding="0"
      style={{
        textAlign: "center",
        margin: "auto",
      }}
    >
      <tbody>
        <tr>
          <td>
            <b>Bookmarklet</b>
            <br />
            <br />
            <div id="main">
              <p id="first">
                Thanks to Phil Kast for writing this bookmarklet for submitting
                links to <a href="http://news.ycombinator.com">Hacker News</a>.
                When you click on the bookmarklet, it will submit the page
                you're on. To install, drag this link to your browser toolbar:
                <br />
                <br />
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Bookmarklet;
