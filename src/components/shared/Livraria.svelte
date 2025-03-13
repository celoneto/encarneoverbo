<script lang="ts">
    import livraria from "../../constants/livraria/livraria.json";
    import CopiarTexto from "./CopiarTexto.svelte";
    import Salvar from "./Salvar.svelte";
    import Titulo from "./Titulo.svelte";
</script>

{#if livraria}
    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 px-10 md:p-5 justify-items-center"
    >
        {#each livraria as lv}
            <a
                href={lv.link_compra}
                target="_blank"
                class="flex flex-col gap-5 my-5 md:my-0 rounded-sm dark:bg-zinc-800 bg-zinc-300 p-5 max-w-80 text-center"
            >

            <div class="relative flex flex-col">
                <img
                    src={lv.imagem}
                    alt="Imagem do livro"
                    class="h-auto lg:h-80 md:h80 object-fill overflow-hidden rounded-sm"
                />
                <Salvar
                    reference={lv.link_compra}
                    text={lv.título}
                    autor={lv.autor}
                    verse={null}
                    traducao={null}
                    citacao=""
                />
                <CopiarTexto
                    reference={lv.link_compra}
                    text={lv.título}
                    autor={lv.autor}
                    verse={null}
                    traducao={null}
                    citacao=""
                />
                <Titulo principalMenor={lv.título} secundario={lv.autor} />
            </div>
        </a>
        {/each}
    </div>
    <p class="text-center text-base text-zinc-500">

        Você será redirecionado para o site da amazon clicando no livro desejado
    </p>
{/if}
