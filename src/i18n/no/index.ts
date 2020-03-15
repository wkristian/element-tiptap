export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Fet',
      },
      Underline: {
        tooltip: 'Understreking',
      },
      Italic: {
        tooltip: 'Kursiv',
      },
      Strike: {
        tooltip: 'Gjennomstreking',
      },
      Heading: {
        tooltip: 'Overskrift',
        buttons: {
          paragraph: 'Paragraf',
          heading: 'Overskrift',
        }
      },
      Blockquote: {
        tooltip: 'Sitat',
      },
      CodeBlock: {
        tooltip: 'Kode blokk',
      },
      Link: {
        add: {
          tooltip: 'Legg til lenke',
          control: {
            title: 'Legg til lenke',
            placeholder: 'Href',
            confirm: 'Legg til',
            cancel: 'Avbryt',
          },
        },
        edit: {
          tooltip: 'Rediger lenke',
          control: {
            title: 'Rediger lenke',
            placeholder: 'Href',
            confirm: 'Oppdater',
            cancel: 'Avbryt',
          },
        },
        unlink: {
          tooltip: 'Fjern lenke',
        },
        open: {
          tooltip: 'Åpne lenke',
        },
      },
      Image: {
        tooltip: 'Sett inn bilde',
        buttons: {
          insert_by_url: 'Sett inn bilde med Url',
          upload_image: 'Last opp bilde',
        },
        control: {
          insert_by_url: {
            title: 'Sett inn bilde',
            placeholder: 'Url til bilde',
            confirm: 'Sett inn',
            cancel: 'Avbryt',
            invalid_url: 'Skriv inn en gyldig adresse',
          },
          upload_image: {
            title: 'Last opp bilde',
            button: 'Velg en bildefil eller dra og slipp et bilde her',
          },
        },
      },
      Iframe: {
        tooltip: 'Sett inn video',
        control: {
          title: 'Sett inn video',
          placeholder: 'Href',
          confirm: 'Sett inn',
          cancel: 'Avbryt',
        },
      },
      BulletList: {
        tooltip: 'Punktmerker',
      },
      OrderedList: {
        tooltip: 'Nummerering',
      },
      TodoList: {
        tooltip: 'Gjøremålsliste',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Venstrejuster',
          },
          align_center: {
            tooltip: 'Midtstill tekst',
          },
          align_right: {
            tooltip: 'Høyrejuster',
          },
          align_justify: {
            tooltip: 'Blokkjuster tekst',
          },
        },
      },
      TextColor: {
        tooltip: 'Skriftfarge',
        reset: 'Fjern',
      },
      TextHighlight: {
        tooltip: 'Uthevingsfarge for tekst',
        reset: 'Gjennomsiktig',
      },
      LineHeight: {
        tooltip: 'Linjeavstand',
      },
      Table: {
        tooltip: 'Tabell',
        buttons: {
          insert_table: 'Sett inn tabell',
          add_column_before: 'Sett inn kolonne til venstre',
          add_column_after: 'Sett inn kolonne til høyre',
          delete_column: 'Slett kolonne',
          add_row_before: 'Sett inn rad over',
          add_row_after: 'Sett inn rad under',
          delete_row: 'Slett rad',
          merge_cells: 'Slå sammen celler',
          split_cell: 'Del celler',
          delete_table: 'Slett tabell',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Øk innrykk',
          },
          outdent: {
            tooltip: 'Reduser innrykk',
          },
        },
      },
      FormatClear: {
        tooltip: 'Fjern formatering',
      },
      HorizontalRule: {
        tooltip: 'Horisontal linje',
      },
      History: {
        tooltip: {
          undo: 'Angre',
          redo: 'Gjøre om',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Fullskjerm',
          exit_fullscreen: 'Avslutt fullskjerm',
        },
      },
      Print: {
        tooltip: 'Skriv ut',
      },
      Preview: {
        tooltip: 'Forhåndsvisning',
        dialog: {
          title: 'Forhåndsvis',
        },
      },
      SelectAll: {
        tooltip: 'Merk alt',
      },
    },
    characters: 'Tegn',
  },
};
