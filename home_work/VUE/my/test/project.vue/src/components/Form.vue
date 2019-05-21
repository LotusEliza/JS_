<template>
    <div class="form">
    <mq-layout mq="lg">
        <div class="row">
            <div class="col">
            </div>
            <div class="col">
                <h2 class="text-center">Please Login</h2>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            label="Email address:"
                            label-for="input-1"
                            description="We'll never share your email with anyone else."
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Enter email"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                        <b-form-input
                                id="input-2"
                                v-model="form.name"
                                required
                                placeholder="Enter name"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                        <b-form-select
                                id="input-3"
                                v-model="form.food"
                                :options="foods"
                                required
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group id="input-group-4">
                        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                            <b-form-checkbox value="me">Check me out</b-form-checkbox>
                            <b-form-checkbox value="that">Check that out</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
                <b-card class="mt-3" header="Form Data Result">
                    <pre class="m-0">{{ form }}</pre>
                </b-card>
            </div>
            <div class="col">
            </div>
        </div>
    </mq-layout>
    <mq-layout :mq="['sm', 'md']">
        <div class="row">
            <div class="col">
                <h2 class="text-center">Please Login</h2>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            label="Email address:"
                            label-for="input-1"
                            description="We'll never share your email with anyone else."
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Enter email"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                        <b-form-input
                                id="input-2"
                                v-model="form.name"
                                required
                                placeholder="Enter name"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                        <b-form-select
                                id="input-3"
                                v-model="form.food"
                                :options="foods"
                                required
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group id="input-group-4">
                        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                            <b-form-checkbox value="me">Check me out</b-form-checkbox>
                            <b-form-checkbox value="that">Check that out</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
                <b-card class="mt-3" header="Form Data Result">
                    <pre class="m-0">{{ form }}</pre>
                </b-card>
            </div>
        </div>
    </mq-layout>





                </div>


                <!--<section id="loginform" class="outer-wrapper">-->

                    <!--<div class="inner-wrapper">-->
                        <!--<div class="container">-->
                            <!--<div class="row">-->
                                <!--<div class="col-sm-4 col-sm-offset-4">-->
                                   <!---->
                                    <!--&lt;!&ndash;<form role="form">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div class="form-group">&ndash;&gt;-->
                                            <!--&lt;!&ndash;<label for="exampleInputEmail1">Email address</label>&ndash;&gt;-->
                                            <!--&lt;!&ndash;<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div class="form-group">&ndash;&gt;-->
                                            <!--&lt;!&ndash;<label for="exampleInputPassword1">Password</label>&ndash;&gt;-->
                                            <!--&lt;!&ndash;<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->

                                        <!--&lt;!&ndash;<div class="checkbox">&ndash;&gt;-->
                                            <!--&lt;!&ndash;<label>&ndash;&gt;-->
                                                <!--&lt;!&ndash;<input type="checkbox"> Remember me&ndash;&gt;-->
                                            <!--&lt;!&ndash;</label>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<button type="submit" class="btn btn-default">Submit</button>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</form>&ndash;&gt;-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->

                <!--</section>-->
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: []
                },
                foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>
<style scoped>
    .row{
        padding: 0px 50px 0px;
    }

    .outer-wrapper {
        display: table;
        width: 100%;
        height: 100%;
    }

    .inner-wrapper {
        display:table-cell;
        vertical-align:middle;
        padding:15px;
    }
    </style>