<template>
    <v-row align="center" justify="center">
        <v-col class="text-center">
            <div class="logo-content">
                <img class="logo-color" src="../../assets/logo_color.png"/>
                <div class="name-logo">Proveedor</div>
            </div>
            <v-card class="mx-auto px-4 content-public" max-width="344" outlined>
                <v-row>
                    <v-col cols="12">
                        <v-icon class="icon-error">mdi-alert-octagon</v-icon>
                        <p>
                            Lo sentimos tu cuenta se encuentra temporalmente bloqueada por violar nuestros terminos y condiciones de servicio. Para mayores informes proporciona tu correo y nosotros nos podremos en contacto contigo en el menor tiempo posible.
                        </p>
                        <template>
                            <label class="detail-input" for="name">Correo</label>
                            <input class="input-custom" id="name" type="text"/>
                        </template>
                    </v-col>
                    <v-col class="text-center" cols="12">
                        <div class="mt-1">
                            <v-btn depressed large color="primary" width="100%">Regresar</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
    export default {
        name: "CuentaBloqueada"
    }
</script>
<style scoped lang="scss">
    .logo-content {
        padding: 0 0 40px;

        .logo-color {
            width: 100px;
        }

        .name-logo {
            color: var(--v-primary-base);
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
    }

    .content-public {
        border-radius: 12px;

        .icon-error {
            color: var(--v-error-base);
            font-size: 5rem;
        }

        p {
            margin-bottom: 0;
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
    }
</style>