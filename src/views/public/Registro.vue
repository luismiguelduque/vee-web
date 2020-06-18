<template>
    <v-row align="center" justify="center">
        <v-col cols="10">
            <span class="title">Registro</span>
        </v-col>
        <v-col class="text-center" cols="10">
            <v-card class="mx-auto px-4 content-public" outlined>
                <v-row>
                    <v-col class="text-left" cols="12">
                        <div class="subtitle">
                            Información de la empresa
                        </div>
                        <p>
                            Regístrate usando esta forma, todos los campos son obligatorios.
                        </p>
                    </v-col>
                    <v-col class="text-left" cols="6">
                        <div class="subtitle">
                            Empresa
                        </div>
                        <div class="d-flex justify-lg-space-around ">
                            <v-checkbox
                                    v-model="companyType"
                                    label="Persona física"
                                    color="primary"
                                    value="1"
                                    hide-details
                            ></v-checkbox>
                            <v-checkbox
                                    v-model="companyType"
                                    label="Persona moral"
                                    color="primary"
                                    value="2"
                                    hide-details
                            ></v-checkbox>
                        </div>
                        <template>
                            <label class="detail-input" for="name">Nombre</label>
                            <input class="input-custom" id="name" type="text"/>
                        </template>
                        <template>
                            <label class="detail-input" for="rfc">RFC</label>
                            <input class="input-custom" id="rfc" type="text"/>
                        </template>
                        <template>
                            <label class="detail-input" for="direction">Dirección</label>
                            <input class="input-custom" id="direction" type="text"/>
                        </template>
                        <template>
                            <label class="detail-input" for="phone">Número teléfonico</label>
                            <input class="input-custom" id="phone" type="text"/>
                        </template>
                        <template>
                            <label class="detail-input" for="email">Correo electrónico</label>
                            <input class="input-custom" id="email" type="text"/>
                        </template>
                        <template>
                            <label class="detail-input" for="responsible">Persona de contacto a quién referir el correo</label>
                            <input class="input-custom" id="responsible" type="text"/>
                        </template>
                    </v-col>
                    <v-col class="text-left" cols="6">
                        <div class="subtitle">
                            Banco
                        </div>
                        <template>
                            <label class="detail-input" for="bank">Banco</label>
                            <input class="input-custom" id="bank" type="text"/>
                        </template>
                        <template>
                            <label class="detail-input" for="account">Número de la cuenta</label>
                            <input class="input-custom" id="account" type="text"/>
                        </template>
                        <template>
                            <label class="detail-input" for="password-account">Cuenta clave</label>
                            <input class="input-custom" id="password-account" type="text"/>
                        </template>
                        <p class="text-center">O si prefieres puedes usar tu cuenta de Pay Pal.</p>
                        <div class="mt-1">
                            <v-btn depressed large color="primary" width="100%">Agregar cuenta de Pay Pal</v-btn>
                        </div>
                    </v-col>
                    <v-col cols="12" class="text-left">
                        <div class="subtitle">
                            Documentación
                        </div>
                        <p>
                            Para poder terminar tu registro debes de proporcionarnos la siguiente documentación en formato 'jpg' o 'pdf':
                        </p>
                        <v-row>
                            <v-col cols="2">
                                <vue-dropzone :options="dropzoneOptions" :useCustomSlot=true>
                                    <div class="dropzone-custom-content">
                                        <h3 class="dropzone-custom-title">Acta constitutiva</h3>
                                    </div>
                                    <div class="dropzone-footer">
                                        <v-icon size="1.5rem">mdi-archive-arrow-up-outline</v-icon>
                                    </div>
                                </vue-dropzone>
                            </v-col>
                            <v-col cols="2">
                                <vue-dropzone :options="dropzoneOptions" :useCustomSlot=true>
                                    <div class="dropzone-custom-content">
                                        <h3 class="dropzone-custom-title">Opinión delcumplimiento SAT</h3>
                                    </div>
                                    <div class="dropzone-footer">
                                        <v-icon size="1.5rem">mdi-archive-arrow-up-outline</v-icon>
                                    </div>
                                </vue-dropzone>
                            </v-col>
                            <v-col cols="2">
                                <vue-dropzone :options="dropzoneOptions" :useCustomSlot=true>
                                    <div class="dropzone-custom-content">
                                        <h3 class="dropzone-custom-title">Registro SIEM</h3>
                                    </div>
                                    <div class="dropzone-footer">
                                        <v-icon size="1.5rem">mdi-archive-arrow-up-outline</v-icon>
                                    </div>
                                </vue-dropzone>
                            </v-col>
                            <v-col cols="2">
                                <vue-dropzone :options="dropzoneOptions" :useCustomSlot=true>
                                    <div class="dropzone-custom-content">
                                        <h3 class="dropzone-custom-title">Licencia municipal de funcionamiento</h3>
                                    </div>
                                    <div class="dropzone-footer">
                                        <v-icon size="1.5rem">mdi-archive-arrow-up-outline</v-icon>
                                    </div>
                                </vue-dropzone>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="6" offset="6" class="text-left">
                        <p>Acepto las <a>condiciones de servicio</a> y la <a>política de privacidad</a> de Vee.</p>
                        <div class="mt-1">
                            <v-btn depressed large color="primary" width="100%">Registrarse</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: "Registro",
        data() {
            return {
                dropzoneOptions: {
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 200,
                    addRemoveLinks: true
                },
            }
        },
        components: {
            vueDropzone: vue2Dropzone,
        }
    }
</script>

<style scoped lang="scss">
    .title {
        font-size: 2rem !important;
        font-weight: bold;
        color: var(--v-primary-base);
    }

    .content-public {
        border-radius: 12px;

        .subtitle {
            font-weight: bold;
            font-size: 1.2rem;
            color: var(--v-primary-base);
        }

        .input-custom {
            border: 1px solid var(--v-primary-base);
            width: 100%;
            border-radius: 4px;
            height: 38px;
        }

        .detail-input {
            color: var(--v-primary-base);
            font-size: 0.8rem;
            font-weight: bold;
            text-align: left;
            display: block;
            width: 100%;
        }

        .vue-dropzone {
            background: var(--v-backgroundDark-base);
            border: none;
            border-radius: 8px;
            color: initial;
            position: relative;
            padding: 0;
            & > .dz-preview {
                .dz-details {
                    background-color: var(--v-primary-base);
                }
            }

            .dropzone-custom-content {
                width: 100%;
                position: absolute;
                top: 20px;
                left: 20px;

                .dropzone-custom-title {
                    margin-top: 0;
                    text-align: left;
                    font-size: 0.8rem;
                }
            }
            .dropzone-footer {
                text-align: left;
                position: absolute;
                bottom: 20px;
                right: 20px;
            }
        }

    }
</style>