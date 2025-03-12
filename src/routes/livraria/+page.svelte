<script lang="ts">
  import Livraria from "../../components/shared/Livraria.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
</script>

<div class="flex flex-col gap-10">
  <Titulo
    before="Livros sobre o"
    key="Verbo"
    after="Indicações de livros que alimentam a fé e iluminam o coração."
  />
  <Livraria />
</div>
