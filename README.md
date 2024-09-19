<h1>Keyshoes Blog</h1>
<hr><p>A simple blog website, to jot down random thoughts.</p><h2>Technologies Used</h2>
<hr><ul>
<li>React</li>
</ul><ul>
<li>Go</li>
</ul><ul>
<li>Postgresql</li>
</ul><h2>Features</h2>
<hr><ul>
<li>View blogs</li>
</ul><ul>
<li>Post, edit or delete blogs from the dashboard</li>
</ul><ul>
<li>Authentication using JWT</li>
</ul><h2>Setup</h2>
<hr><p>You can either run the docker compose file by providing the required environment variables. Or, you can follow the below steps to run them locally one by one.</p><h5>Steps</h5><ul>
<li>clone the repository and run the below commands</li>
</ul><ul>
<li><code>go mod download</code></li>
</ul><ul>
<li><code>cd web</code></li>
</ul><ul>
<li><code>npm install</code></li>
</ul><ul>
<li>To run the migrations script to build the database schema, go to migrations folder</li>
</ul><ul>
<li>run <code>psql -U username -d dbname -a migrations.sql</code></li>
</ul><ul>
<li>To run the backend, run <code>go run main.go</code> from inside the cmd folder</li>
</ul><ul>
<li>To run the frontend locally run <code>npm run dev</code> from inside the web folder</li>
</ul><h2>Usage</h2>
<hr><p>You can use it as a personal blog website, where you can post your personal blogs through the dashboard.</p><h5>Code Examples</h5><ul>
<li>Change the code in main.go to below, when running for the first time, then change back to original after signing up.</li>
</ul><p><code>http.HandleFunc("/login", handlers.HandleSignup)</code></p><h2>Project Status</h2>
<hr><p>Always in progress.</p><h2>Improvements</h2>
<hr><ul>
<li>Add footer notes</li>
</ul><ul>
<li>Improve CSS</li>
</ul><h2>Features that can be added</h2>
<hr><ul>
<li>Comments</li>
</ul><ul>
<li>Tagging</li>
</ul><h2>Acknowledgement</h2>
<hr><ul>
<li>Jim Nielson's Blog</li>
</ul><h2>Contact</h2>
<hr><p><span style="margin-right: 30px;"></span><a href="https://github.com/Kishu98"><img style="width: 10%;" target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"></a></p>