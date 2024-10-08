import "../css/HasToFilter.css"

const UsingHas = () => {

    return (
        <>
        <section>
	<form>
		<p>Filter by category:</p>
		<label>
			<input type="checkbox" name="snacks" checked />
			snacks
		</label>

		<label>
			<input type="checkbox" name="naps" checked />
			naps
		</label>

		<label>
			<input type="checkbox" name="computers" checked />
			computers
		</label>
	</form>

	<article>
		<img src="https://images.unsplash.com/photo-1708724195876-1156245fce21?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400" alt="abstract color pattern" />
		<h2>Afternoon Hammock</h2>
		<p class="categories" data-category="naps"></p>
	</article>

	<article>
		<img src="https://images.unsplash.com/photo-1709625862284-b8a82d339b99?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400" alt="abstract color pattern" />
		<h2>Tomagotchi</h2>
		<p class="categories" data-category="computers"></p>
	</article>

	<article>
		<img src="https://images.unsplash.com/photo-1643916861364-02e63ce3e52f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400" alt="abstract color pattern" />
		<h2>Strawberry Ice Cream</h2>
		<p class="categories" data-category="snacks"></p>
	</article>

	<article>
		<img src="https://images.unsplash.com/photo-1672217617440-1dd3e9417ce1?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400" alt="abstract color pattern" />
		<h2>Tortilla Chips</h2>
		<p class="categories" data-category="snacks"></p>
	</article>

	<article>
		<img src="https://images.unsplash.com/photo-1699462515761-90db271d77c8?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400" alt="abstract color pattern" />
		<h2>Comfy Chair</h2>
		<p class="categories" data-category="naps"></p>
	</article>

	<article>
		<img src="https://images.unsplash.com/photo-1709625862266-014ef072fd93?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400" alt="abstract color pattern" />
		<h2>Game Boy Advance</h2>
		<p class="categories" data-category="computers"></p>
	</article>

	<article>
		<img src="https://images.unsplash.com/photo-1695278255455-9afc87008775?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400" alt="abstract color pattern" />
		<h2>TI-83</h2>
		<p class="categories" data-category="computers"></p>
	</article>

	<article>
		<img src="https://images.unsplash.com/photo-1637611331620-51149c7ceb94?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400" alt="abstract color pattern" />
		<h2>Hummus</h2>
		<p class="categories" data-category="snacks"></p>
	</article>

	<article>
		<img src="https://images.unsplash.com/photo-1688748807457-d8926e351596?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400" alt="abstract color pattern" />
		<h2>Sneaky Desk</h2>
		<p class="categories" data-category="naps"></p>
	</article>

</section>
        </>
    );
}
export default UsingHas;